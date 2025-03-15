import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='bg-[#0e0e0e] flex flex-row justify-center items-center minLaptop:flex-col smallLaptop:pt-[7rem] minLaptop:relative  '>
      <div className='flex flex-col gap-6 minLaptop:gap-3 sm:gap-2 minLaptop:order-2  minLaptop:justify-center minLaptop:items-center  minLaptop:absolute minLaptop:z-50 minLaptop:mt-[-10rem] psm:mt-[-7rem] ysm:mt-[-5.5rem] lsm:mt-[-7rem]'>
        <p className='font-manrope text-white text-[14px] ysm:text-[11px] lsm:text-[10px] tracking-[10px] lsm:tracking-[6px] leading-auto opacity-[49.64%] minLaptop:text-center'>
          NEW PRODUCT
        </p>
        <p className='max-w-[396px] tsm:max-w-[328px] lsm:max-w-[250px] text-white font-manrope font-bold tracking-[2px] tsm:tracking-[1.29px] text-[3.5rem] tsm:text-[2.25rem] ysm:text-[2rem] lsm:text-[1.5rem] leading-[3.625rem] tsm:leading-[2.5rem] lsm:leading-[1.6rem] minLaptop:text-center'>
          XX99 Mark II Headphones
        </p>
        <p className='opacity-[75%] font-manrope text-[15px] ysm:text-[13px] lsm:text-[11px] sm:text-[10px]  leading-[25px] ysm:leading-[20px] lsm:leading-[15px] sm:leading-[12px] max-w-[349px] tsm:max-w-[328px] ysm:max-w-[280px] lsm:max-w-[220px] sm:max-w-[180px] minLaptop:text-center text-white font-medium'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className='minLaptop:mt-6 lsm:mt-4'>
          <Link
            href='/product-headphones1'
            className='bg-[#D87D4A] text-white max-w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-3 px-6 lsm:px-2 lsm:py-2'
          >
            see product
          </Link>
        </div>
      </div>

      <div className='minLaptop:order-1 minLaptop:mt-[-9rem] minLaptop:flex minLaptop:justify-center minLaptop:items-center '>
        <Image
          src='/images/homeHeadphones.png'
          width={708.8}
          height={886}
          alt='headphones'
          className='opacity-[100%]  minLaptop:hidden'
        />
        <Image
          src='/images/heroMobile.png'
          width={708.8}
          height={886}
          alt='headphones'
          className=' lg:opacity-[50.21%] hidden minLaptop:flex '
        />
      </div>
    </section>
  );
};

export default Hero;
