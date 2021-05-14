import React from 'react';
import Slider from 'react-slick';

import './slick-style.scss';
import style from './mainBanner.module.scss';

import bannerDesktop from '../../assets/imgs/banner-desktop.png';
import bannerMobile from '../../assets/imgs/banner-mobile.png';

const MainBanner: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={style.mainBanner}>
      <Slider {...settings}>
        <div className={style.slickImage}>
          <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
          <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
        </div>
        <div className={style.slickImage}>
          <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
          <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
        </div>
        <div className={style.slickImage}>
          <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
          <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
        </div>
      </Slider>
    </div>
  );
}

export default MainBanner;
