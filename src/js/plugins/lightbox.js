// lightbox.js
/* global lightGallery:readable */
import 'lightgallery.js'; // see: https://sachinchoolur.github.io/lightgallery.js/
import 'lg-video.js'; // see: https://github.com/sachinchoolur/lg-video.js/blob/master/readme.md

// Multiple Lightboxes
const lightbox = document.querySelectorAll('.lightbox');
lightbox.forEach((item) => {
  lightGallery(item, {
    youtubePlayerParams: {
      modestbranding: 0,
      showinfo: 0,
      rel: 0,
      controls: 0,
    },
    share: false,
    download: false,
    autoplayFirstVideo: false,
    videoMaxWidth: '1440px',
  });
});
