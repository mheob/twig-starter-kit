/* global lightGallery:readable */

import 'lightgallery.js'; // see: https://sachinchoolur.github.io/lightgallery.js/
import 'lg-video.js'; // see: https://github.com/sachinchoolur/lg-video.js/blob/master/readme.md

const lightboxes = document.querySelectorAll('.lightbox');
lightboxes.forEach((item) => {
  // The lightGallery function comes from the lightgallery.js import.
  lightGallery(item, {
    autoplayFirstVideo: true,
    download: false,
    share: false,
    videoMaxWidth: '1440px',
    youtubePlayerParams: {
      modestbranding: 0,
      showinfo: 0,
      rel: 0,
      controls: 0,
    },
  });
});
