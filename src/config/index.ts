import { Settings } from 'react-slick';

export const API_URL = 'https://corebiz-test.herokuapp.com/api/v1';

export const settingsBanner: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const settingsShelf: Settings = {
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      },
    },
  ],
};
