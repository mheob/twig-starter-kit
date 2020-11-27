# Starter Kit :rocket:

A simple Starter Kit using Twig, TailwindCSS and Gulp for creating mostly CraftCMS templates.

#### Included a bunch of basic frontend plugins

- flickity
- lightgallery.js incl. lg-video.js

#### How to get started?

- `clone` this repo
- `composer i` to install the required php dependencies
- `nmp i` to install the required js dependencies
- Open gulpfile.js and customize the site variable
- Next, `cd dist` to change to the web directory
- Run `valet link site` and `valet secure site`

#### Run development or production tasks

- `npm run dev` is used to monitor your source files for development
- `npm run build` minified CSS, JS, IMG, HTML files for production

For ease of use, I recommend creating aliases in the ".bash_profile" file. Don't forget to reload the bash profile after editing with `source ~/.bash_profile`

For example:

```
alias rd="npm run dev"
alias rb="npm run build"
```
