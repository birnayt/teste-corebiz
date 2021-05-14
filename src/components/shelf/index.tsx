/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import Slider from 'react-slick';

import { getProducts } from '../../api';
import { useProducts } from '../../contexts';

import ProductItem from '../productItem';
import style from './shelf.module.scss';
import './slick.css';

const Shelf: React.FC = () => {
  const { products, setProducts } = useProducts();

  const settings = {
    arrows: true,
    infinite: true,
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
      <h2 className={style.title}>Mais Vendidos</h2>
      {products && products?.length ?
        <Slider {...settings}>
          {products?.map((product) => <ProductItem key={product.productId} product={product} />)}
        </Slider>
        : null
      }
    </div>
  );
}

export default Shelf;
