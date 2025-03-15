import React from 'react';
import Link from 'next/link';

const ZSpeaker = () => {
  return (
    <section className='mt-[-2rem] smallLaptop:mt-[-5rem] ysm:mt-[-6rem] max-w-[1110px] smallLaptop:max-w-[689px] tsm:max-w-[600px] psm:max-w-[500px] ysm:max-w-[327px] mx-auto h-[320px] bg-[url(/images/zx9bg.png)] smallLaptop:bg-[url(/images/zspeakertab.png)] ysm:bg-[url(/images/z9speakermobile.png)] rounded-md'>
      <div className='pt-[7rem] pl-[5rem] smallLaptop:pl-[3rem] tsm:pl-6'>
        <p className='uppercase  font-manrope font-bold text-black tracking-[2px] text-[28px]'>
          Z X 7 speaker
        </p>
        <div className='mt-[2rem]'>
          <Link
            href='/'
            className='px-9 py-4 border-black border-[1px] hover:bg-[#000000] text-black text-[13px] leading-[1px] hover:text-white font-manrope font-bold uppercase  bg-transparent '
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ZSpeaker;
