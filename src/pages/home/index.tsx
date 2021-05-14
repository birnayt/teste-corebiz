/* eslint-disable camelcase */
import React from 'react';

import Header from '../../components/header';
import MainBanner from '../../components/mainBanner';
import Footer from '../../components/footer';


const HomePage = () => {
  return (
    <>
      <Header />
      <body>
        <MainBanner />
      </body>
      <Footer />
    </>
  );
}

export default HomePage;
