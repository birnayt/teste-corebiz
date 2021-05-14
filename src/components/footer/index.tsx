import React from 'react';
import style from './footer.module.scss';

import Newsletter from '../../components/newsletter';

import iconCoreBiz from '../../assets/imgs/logo-footer.png';
import iconVtex from '../../assets/imgs/icon-vtex.png';
import iconEmail from '../../assets/imgs/icon-email.png';
import iconContact from '../../assets/imgs/icon-contact.png';


const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer>
        <div className={style.localization}>
          <h2 className={style.localizationTitle}>Localização</h2>
          <ul className={style.companyInfos}>
            <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
            <li>Alphaville SP</li>
            <li><a href="mailto:brasil@corebiz.ag" title="E-mail CoreBiz">brasil@corebiz.ag</a></li>
            <li><a href="tel:+551130901039" title="Telephone CoreBiz">+55 11 3090 1039</a></li>
          </ul>
        </div>

        <div className={style.contact}>
          <button className={style.emailContact}>
            <img src={iconEmail} />
            <p>Entre em contato</p>
          </button>

          <button className={style.talkToUs}>
            <img src={iconContact} />
            <p>Fale com o nosso consultor online</p>
          </button>
        </div>

        <div className={style.signature}>
          <div className={style.signatureDiv}>
            Covered by
            <img src={iconCoreBiz} />
          </div>
          <div className={style.signatureDiv}>
            Powered By
            <img src={iconVtex} className={style.iconVtex} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
