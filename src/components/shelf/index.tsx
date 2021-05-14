/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { getProducts } from '../../api';
import { useProducts } from '../../contexts';

import ProductItem from '../productItem';
import style from './shelf.module.scss';

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
  }, [products]);

  return (
    <div className={style.shelf}>
      {products?.map((product) => <ProductItem key={product.productId} product={product} />)};
    </div>
  );
}

export default Shelf;
