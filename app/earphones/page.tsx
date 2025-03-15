import Hero from './Hero';
import Audio from '../homePages/Audio';
import Shop from '../homePages/Shop';
import YEarphones from './YEarphones';

const page = () => {
  return (
    <>
      <Hero />
      <YEarphones />
      <section className='mt-[10rem]'>
        <Shop />
      </section>
      <Audio />
    </>
  );
};

export default page;
