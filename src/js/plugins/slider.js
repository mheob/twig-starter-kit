// slider.js
import Flickity from 'flickity';

// Default Settings
const defaultSliderSettings = {
  arrowShape:
    // eslint-disable-next-line max-len
    'M32.46,49.85,58.52,16a2.58,2.58,0,0,0,0-3,1.38,1.38,0,0,0-2.31,0L29,48.35a2.58,2.58,0,0,0,0,3L56.21,86.72a1.36,1.36,0,0,0,2.3,0,2.58,2.58,0,0,0,0-3Z',
  wrapAround: true,
  pageDots: true,
  prevNextButtons: true,
};

// Page Header Slider
const phSlider = document.querySelectorAll('.ph-slider');

phSlider.forEach((slide) => {
  new Flickity(slide, {
    ...defaultSliderSettings,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
  });
});

// Page Builder Carousel Test
const pbCarousel = document.querySelectorAll('.pb-carousel');

pbCarousel.forEach((slide) => {
  new Flickity(slide, {
    ...defaultSliderSettings,
    autoPlay: 8000,
    pauseAutoPlayOnHover: false,
  });
});
