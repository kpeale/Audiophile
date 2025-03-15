import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
  return (
    <section className='mt-[10rem] relative flex flex-row tsm:flex-col gap-[30px] smallLaptop:gap-[10px] tsm:gap-[60px] tsm:mt-[5rem] justify-center items-center'>
      <div className='bg-[#f1f1f1] opacity-[100%] w-[350px] h-[204px] flex flex-col justify-center items-center rounded-[8px] smallLaptop:w-[223px] smallLaptop:h-[165px] tsm:w-[327px] nsm:w-[223px]'>
        <div className='absolute top-[-3.5rem]'>
          <Image
            src='/images/shopHeadphones.png'
            width={79.92}
            height={104}
            alt='headphones'
          />
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-black opacity-100 blur-md'></div>
        </div>
        <div className='mt-[6rem] flex flex-col gap-4 smallLaptop:mt-[4.5rem] '>
          <p className='text-black font-manrope font-bold text-[15px] uppercase tracking-[1.07px]  '>
            Headphones
          </p>
          <div className='flex flex-row justify-center items-center gap-[13px]'>
            <Link
              className='uppercase opacity-[50%] text-black font-bold font-manrope text-[13px] tracking-[1px] hover:text-[#d87d4a] hover:opacity-[100%]'
              href='/Headphones'
            >
              shop
            </Link>
            <div>
              <Image
                src='/images/shopArrow.png'
                width={5}
                height={10}
                alt='right arrow'
              />
            </div>
          </div>
        </div>
      </div>
      {/* another div */}
      <div className='bg-[#f1f1f1] opacity-[100%] w-[350px] h-[204px] flex flex-col justify-center items-center rounded-[8px] smallLaptop:w-[223px] smallLaptop:h-[165px] tsm:w-[327px] nsm:w-[223px] '>
        <div className='absolute top-[-3.5rem] tsm:top-[11rem]'>
          <Image
            src='/images/shopSpeaker.png'
            width={84.04}
            height={101}
            alt='speakers'
          />
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-black opacity-100 blur-md'></div>
        </div>
        <div className='mt-[6rem] flex flex-col gap-4 smallLaptop:mt-[4.5rem]'>
          <p className='text-black font-manrope font-bold text-[15px] uppercase tracking-[1.07px]  '>
            Speakers
          </p>
          <div className='flex flex-row justify-center items-center gap-[13px]'>
            <Link
              className='uppercase opacity-[50%] text-black font-bold font-manrope text-[13px] tracking-[1px] hover:text-[#d87d4a] hover:opacity-[100%]'
              href='/speaker'
            >
              shop
            </Link>
            <div>
              <Image
                src='/images/shopArrow.png'
                width={5}
                height={10}
                alt='right arrow'
              />
            </div>
          </div>
        </div>
      </div>
      {/* last div */}
      <div className='bg-[#f1f1f1] opacity-[100%] w-[350px] h-[204px] flex flex-col justify-center items-center rounded-[8px] smallLaptop:w-[223px] smallLaptop:h-[165px] tsm:w-[327px] nsm:w-[223px]'>
        <div className='absolute top-[-3.5rem] tsm:top-[26rem]'>
          <Image
            src='/images/shopEarphones.png'
            width={103}
            height={104}
            alt='earphones'
          />
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-black opacity-100 blur-md'></div>
        </div>
        <div className='mt-[6rem] flex flex-col gap-4 smallLaptop:mt-[4.5rem]'>
          <p className='text-black font-manrope font-bold text-[15px] uppercase tracking-[1.07px] '>
            Earphones
          </p>
          <div className='flex flex-row justify-center items-center gap-[13px]'>
            <Link
              className='uppercase opacity-[50%] text-black font-bold font-manrope text-[13px] tracking-[1px] hover:text-[#d87d4a] hover:opacity-[100%] '
              href='/earphones'
            >
              shop
            </Link>
            <div>
              <Image
                src='/images/shopArrow.png'
                width={5}
                height={10}
                alt='right arrow'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
