import Audio from '../homePages/Audio';
import Shop from '../homePages/Shop';
import Hero from './Hero';
import MarkII from './MarkII';

const page = () => {
  return (
    <>
      <Hero />
      <MarkII />
      <section className='mt-[10rem]'>
        <Shop />
      </section>
      <Audio />
    </>
  );
};

export default page;
