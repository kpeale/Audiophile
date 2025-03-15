import Audio from './homePages/Audio';
import Earphones from './homePages/Earphones';
import Hero from './homePages/Hero';
import Shop from './homePages/Shop';
import Speaker from './homePages/Speaker';
import ZSpeaker from './homePages/ZSpeaker';

export default function Home() {
  return (
    <>
      <Hero />
      <Shop />
      <Speaker />
      <ZSpeaker />
      <Earphones />
      <Audio />
    </>
  );
}
