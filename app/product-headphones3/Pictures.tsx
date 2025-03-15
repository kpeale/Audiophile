import Image from 'next/image';
import React from 'react';

const Pictures = () => {
  return (
    <>
      <section className='flex flex-row max-w-[1110px] mx-auto gap-[30px] mt-[8rem] smallLaptop:gap-[18px] smallLaptop:justify-center tsm:mt-[3rem] tsm:gap-[20px] tsm:flex-col tsm:items-center'>
        <div className='flex flex-col gap-8 smallLaptop:gap-5 tsm:gap-5'>
          <div>
            <Image
              src='/images/zx9headphones1.png'
              width={445}
              height={280}
              alt='mark 2 product picture'
              className='smallLaptop:w-[277px] smallLaptop:h-[174px] tsm:w-[327px] nsm:w-[310px]'
            />
          </div>

          <div>
            <Image
              src='/images/zheadphones2.png'
              width={445}
              height={280}
              alt='mark 2 product picture'
              className='smallLaptop:w-[277px] smallLaptop:h-[174px] tsm:w-[327px] nsm:w-[310px]'
            />
          </div>
        </div>

        <div>
          <Image
            src='/images/zx9headphones3.png'
            width={635}
            height={592}
            alt='mark 2 product picture'
            className='smallLaptop:w-[395px] smallLaptop:h-[368px] tsm:w-[327px] nsm:w-[310px]'
          />
        </div>
      </section>
    </>
  );
};

export default Pictures;
