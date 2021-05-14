/* eslint-disable camelcase */
import React from 'react';
import { toBrl } from '../../utils'
import { Product } from '../../models'

import style from './productItem.module.scss';

type Props = {
  product: Product;
}

const ProductItem = (props: Props) => {
  console.log(props.product);
  return props.product ? (
    <div className={style.item}>
      <div className={style.flag}>
        {props.product.listPrice ? <p>OFF</p> : null}
      </div>
      <div className={style.img}>
        <img src={props.product.imageUrl} alt={props.product.productName} />
      </div>
      <div className={style.info}>
        <p className={style.name}>{props.product.productName}</p>
        <img className={style.stars} src={`assets/stars/stars-${props.product.stars}.png`} alt="" />
        <div className={style.price}>por {toBrl(props.product.price / 100)}</div>
        <div className={style.installments}>
          {props.product.installments.length ?
            <p>ou em {props.product.installments[0].quantity} de {toBrl(props.product.installments[0].value / 100)}</p>
            : null
          }
        </div>
        <button className={style.buyBtn}>
          Comprar
        </button>
      </div>
    </div>
  ) : null;
}

export default ProductItem;
