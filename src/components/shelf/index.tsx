/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import Slider from 'react-slick';

import { getProducts } from '../../api';
import { useProducts } from '../../contexts';
import { settingsShelf } from '../../config';

import ProductItem from '../productItem';

import style from './shelf.module.scss';
import './slick.css';

const Shelf: React.FC = () => {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    if (!products) {
      getProducts()
        .then(({ data }) => {
          setProducts(data);
        })
        .catch(() => {
          console.log("Ocorreu um erro ao carregar os produtos");
        })
    }
    console.log(products)
  }, []);

  return (
    <div className={style.shelf + " shelf-slick"}>
      <h2 className={style.title}>Mais Vendidos</h2>
      {products && products?.length ?
        <Slider {...settingsShelf}>
          {products?.map((product) => <ProductItem key={product.productId} product={product} />)}
        </Slider>
        : null
      }
    </div>
  );
}

export default Shelf;
