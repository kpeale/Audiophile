import Audio from '../homePages/Audio';
import Shop from '../homePages/Shop';
import OtherProducts from '../product-headphones1/OtherProducts';
import Features from './Features';
import Pictures from './Pictures';
import Product from './Product';

const page = () => {
  return (
    <>
      <Product />
      <Features />
      <Pictures />
      <OtherProducts />
      <section>
        <Shop />
      </section>
      <Audio />
    </>
  );
};

export default page;
