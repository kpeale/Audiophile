import ZSpeaker from './ZSpeaker';
import Hero from './Hero';
import Audio from '../homePages/Audio';
import Shop from '../homePages/Shop';

const page = () => {
  return (
    <>
      <Hero />
      <ZSpeaker />
      <section className='mt-[10rem]'>
        <Shop />
      </section>
      <Audio />
    </>
  );
};

export default page;
