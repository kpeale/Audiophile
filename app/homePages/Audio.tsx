import Image from 'next/image';
import React from 'react';

const Audio = () => {
  return (
    <section className='mt-[8rem] max-w-[1110px] tsm:max-w-[600px] psm:max-w-[500px] ysm:max-w-[327px] gap-[125px] flex flex-row mx-auto smallLaptop:flex-col smallLaptop:gap-[63px] smallLaptop:mt-[5rem] ysm:gap-[30px] mb-[10rem] smallLaptop:mb-[5rem] '>
      <div className='pt-[10rem] smallLaptop:order-2 smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center smallLaptop:pt-[1rem]'>
        <h3 className='uppercase text-[40px] max-w-[445px] font-manrope font-bold leading-[44px] tracking-[1.43px] smallLaptop:w-[573px] psm:max-w-[500px] psm:text-[28px] psm:leading-none ysm:max-w-[327px] psm:text-center'>
          <span className='text-black'> Bringing you the</span>

          <span className='text-[#d87d4a]'> best</span>
          <span> audio gear</span>
        </h3>

        <p className='max-w-[445px] text-black opacity-50 font-manrope font-medium leading-[25px] text-[15px] mt-[1.5rem] smallLaptop:max-w-[573px] psm:max-w-[500px] ysm:max-w-[327px] psm:text-center'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='smallLaptop:order-1 smallLaptop:flex smallLaptop:justify-center smallLaptop:items-center'>
        <Image
          src='/images/manwithearphone.png'
          width={540}
          height={588}
          alt='man wearing earphones'
          className='smallLaptop:hidden'
        />
        <Image
          src='/images/earphoneMantab.png'
          width={689}
          height={300}
          alt='man wearing earphones'
          className=' hidden smallLaptop:flex tsm:w-[600px] psm:w-[500px] ysm:hidden '
        />
        <Image
          src='/images/earphonemobile.png'
          width={327}
          height={300}
          alt='man wearing earphones'
          className=' hidden  ysm:flex '
        />
      </div>
    </section>
  );
};

export default Audio;
