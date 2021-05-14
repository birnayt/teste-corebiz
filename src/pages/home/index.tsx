/* eslint-disable camelcase */
import React from 'react';

import Header from '../../components/header';
import MainBanner from '../../components/mainBanner';
import Shelf from '../../components/shelf';
import Footer from '../../components/footer';


const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="body home">
        <MainBanner />
        <Shelf />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
