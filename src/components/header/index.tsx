import React from 'react';
import style from './header.module.scss';

import logoHeader from '../../assets/imgs/logo-header.png';
import logoCart from '../../assets/imgs/icon-cart.png';
import menuMobile from '../../assets/imgs/icon-menu-mobile.png';

const Header = () => {
  return (
    <header>
      <div className={style.mobileMenu}>
        <img src={menuMobile} alt="Mobile Menu" />
      </div>
      <div className={style.logo}>
        <a href="/" title="CoreBiz"><img src={logoHeader} alt="CoreBiz Logo" /></a>
      </div>

      <div className={style.search}>
        <form className={style.searchForm}>
          <input type="text" placeholder="O que está procurando?" name="search" className={style.searchField} />
          <input type="submit" className={style.searchSubmit} />
        </form>
      </div>

      <div className={style.options}>
        <div>
          <a href="/" className={style.myAccount} ><i className={style.spriteAccount}></i> Minha Conta</a>
        </div>
        <div>
          <div className={style.cart}>
            <img src={logoCart} alt="MiniCart" />
            <p className={style.cartCount}>1</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
