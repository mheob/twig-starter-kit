import Flickity from 'flickity';

const generalSliderSettings = {
  arrowShape:
    // eslint-disable-next-line max-len
    'M32.46,49.85,58.52,16a2.58,2.58,0,0,0,0-3,1.38,1.38,0,0,0-2.31,0L29,48.35a2.58,2.58,0,0,0,0,3L56.21,86.72a1.36,1.36,0,0,0,2.3,0,2.58,2.58,0,0,0,0-3Z',
  pageDots: true,
  pauseAutoPlayOnHover: false,
  prevNextButtons: true,
  wrapAround: true,
};

const createSlider = (sliders, additionalSettings = {}) => {
  sliders.forEach((slider) => {
    new Flickity(slider, {
      ...generalSliderSettings,
      ...additionalSettings,
    });
  });
};

const pageHeaderSliders = document.querySelectorAll('.ph-slider');
createSlider(pageHeaderSliders, { autoPlay: 6000 });

const pageBuilderSliders = document.querySelectorAll('.pb-carousel');
createSlider(pageBuilderSliders, { autoPlay: 8000 });
