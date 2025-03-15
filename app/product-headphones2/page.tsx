import React from 'react';
import Product from './Product';
import Features from './Features';
import Pictures from './Pictures';
import Shop from '../homePages/Shop';
import Audio from '../homePages/Audio';
import OtherProducts from './OtherProducts';

const page = () => {
  return (
    <>
      <Product />
      <Features />
      <Pictures />
      <OtherProducts />
      <section className='mt-8rem'>
        <Shop />
      </section>
      <Audio />
    </>
  );
};

export default page;
