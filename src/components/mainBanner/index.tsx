import React from 'react';
import Slider from 'react-slick';

import { settingsBanner } from '../../config';

import './slick-style.scss';
import style from './mainBanner.module.scss';

import bannerDesktop from '../../assets/imgs/banner-desktop.png';
import bannerMobile from '../../assets/imgs/banner-mobile.png';

const MainBanner: React.FC = () => {
  return (
    <div className="slick-mainBanner">
      <Slider {...settingsBanner}>
        <div className={style.slickImage}>
          {window?.innerWidth >= 642
            ? <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
            : <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
          }
        </div>
        <div className={style.slickImage}>
          {window?.innerWidth >= 642
            ? <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
            : <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
          }
        </div>
        <div className={style.slickImage}>
          {window?.innerWidth >= 642
            ? <a href="#banner"><img src={bannerDesktop} className={style.bannerDesktop} alt="Main Banner - Desktop" /></a>
            : <a href="#banner"><img src={bannerMobile} className={style.bannerMobile} alt="Main Banner - Mobile" /></a>
          }
        </div>
      </Slider>
    </div >
  );
}

export default MainBanner;
