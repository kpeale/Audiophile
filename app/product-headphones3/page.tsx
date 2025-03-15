import Audio from '../homePages/Audio';
import Shop from '../homePages/Shop';
import Features from './Features';
import OtherProducts from './OtherProducts';
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
