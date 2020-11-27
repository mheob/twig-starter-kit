/* eslint-disable no-undef */

// *** Config
const site = 'starter1.test';
const folder = {
  src: 'src/',
  dist: 'dist/',
};
const cleanupFolder = ['dist/css/', 'dist/js/'];

// *** Load Plugins

const { series, parallel, watch, src, dest } = require('gulp');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const cleancss = require('gulp-clean-css');
const gulpif = require('gulp-if');
const homedir = require('os').homedir();
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

const production = process.env.NODE_ENV == 'production' ? true : false;

// *** Clean up
function cleanUp() {
  return src(cleanupFolder, { read: false, allowEmpty: true }).pipe(clean());
}

// *** Styles
function styles() {
  return src([folder.src + 'css/app.pcss'])
    .pipe(
      postcss([
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
      ])
    )
    .pipe(gulpif(production, cleancss()))
    .pipe(rename({ basename: 'app', extname: '.css' }))
    .pipe(dest(folder.dist + 'css'))
    .pipe(browserSync.reload({ stream: true }));
}

// *** Scripts
function scripts() {
  return browserify({
    entries: folder.src + 'js/app.js',
    debug: true,
  })
    .transform(babelify, {
      presets: ['@babel/preset-env'],
    })
    .bundle()
    .on(
      'error',
      notify.onError(function (error) {
        return 'Error: ' + error.message;
      })
    )
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpif(production, uglify()))
    .pipe(dest(folder.dist + 'js'))
    .pipe(browserSync.stream());
}

// *** Fonts
function fonts() {
  return src(folder.src + 'fonts/**/*')
    .pipe(dest(folder.dist + 'fonts'))
    .pipe(browserSync.stream());
}

// *** Images
function images() {
  return src(folder.src + 'assets/**/*')
    .pipe(imagemin())
    .pipe(dest(folder.dist + 'assets'))
    .pipe(browserSync.stream());
}

// *** BrowserSync
function browser(done) {
  browserSync.init({
    proxy: `https://${site}`,
    host: site,
    port: 3000,
    open: false,
    notify: true,
    https: {
      key: `${homedir}/.config/valet/Certificates/${site}.key`,
      cert: `${homedir}/.config/valet/Certificates/${site}.crt`,
    },
    ui: { port: 3000 + 1 },
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

// *** Watch tasks
function watchFiles() {
  watch(folder.src + 'css/**/*', series(styles, reload));
  watch('tailwind.config.js', styles);
  watch(folder.src + 'assets/**/*', images);
  watch(folder.src + 'js/**/*.js', scripts);
  watch(folder.src + '**/*.+(html|php|twig)', reload);
}

// *** Export tasks
exports.build = series(cleanUp, parallel(styles, scripts, images, fonts));
exports.dev = series(
  cleanUp,
  parallel(styles, scripts, images, fonts),
  browser,
  watchFiles
);
exports.default = exports.dev;
