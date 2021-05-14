/* eslint-disable camelcase */
import React from 'react';

import { toBrl } from '../../utils'
import { useCart } from '../../contexts';
import { Product } from '../../models'

import style from './productItem.module.scss';
import flagDiscount from '../../assets/imgs/flag-discount.png';

type Props = {
  product: Product;
}

const ProductItem = (props: Props) => {
  const { cartCount, setCartCount } = useCart();

  return props.product ? (
    <div className={style.item}>
      <a href="#product" className={style.link}>
        <div className={style.flag}>
          {props.product.listPrice ? <img src={flagDiscount} alt="Discount" /> : null}
        </div>
        <div className={style.img}>
          <img
            src={props.product.imageUrl}
            alt={props.product.productName}
          />
        </div>
      </a>
      <div className={style.info}>
        <a href="#link" className={style.name}>{props.product.productName}</a>
        <img
          className={style.stars}
          src={`assets/stars/stars-${props.product.stars}.png`}
          alt=""
        />
        <div className={style.listPrice}>
          {props.product.listPrice ? 'de ' + toBrl(props.product.listPrice / 100) : null}
        </div>
        <div className={style.price}>por {toBrl(props.product.price / 100)}</div>
        <div className={style.installments}>
          {props.product.installments.length ?
            <p>ou em {props.product.installments[0].quantity} de {toBrl(props.product.installments[0].value / 100)}</p>
            : null
          }
        </div>
        <button
          className={style.buyBtn}
          onClick={() => {
            const newCount = cartCount + 1;
            setCartCount(newCount);
            localStorage.setItem('cartCount', newCount.toString());
          }}>
          Comprar
        </button>
      </div>
    </div >
  ) : null;
}

export default ProductItem;
