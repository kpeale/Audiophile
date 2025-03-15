import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const OtherProducts = () => {
  return (
    <>
      <section className='mt-[8rem] max-w-[1110px] mx-auto tsm:mt-[4rem]'>
        <h3 className='uppercase text-black font-manrope font-bold text-center tracking-[1.14px] text-[2rem] leading-[2.25rem] tsm:text-[1.5rem] tsm:tracking-[0.86px]'>
          you may also like
        </h3>
        <div className='flex flex-row gap-[1.875rem] mt-12 items-center justify-center smallLaptop:gap-[11px]  tsm:flex-col tsm:gap-[40px]'>
          <div>
            <div className='bg-[#f1f1f1] rounded-md w-[350px] h-[318px] flex justify-center items-center smallLaptop:w-[223px] smallLaptop:h-[318px] tsm:w-[327px] tsm:h-[120px] nsm:w-[310px]'>
              <div>
                <Image
                  src='/images/markI.png'
                  width={143.81}
                  height={193}
                  alt='mark 1 headphones'
                  className='tsm:w-[73px] tsm:h-[95px]'
                />
              </div>
            </div>
            <div className='flex flex-col items-center mt-8 gap-8'>
              <p className='uppercase text-black font-manrope font-bold leading-[auto] tracking-[1.71px] text-[1.5rem]'>
                XX99 MARK I
              </p>
              <div className=''>
                <Link
                  href='/'
                  className='bg-[#D87D4A] text-white w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-4 px-9'
                >
                  add to cart
                </Link>
              </div>
            </div>
          </div>

          {/* next */}
          <div>
            <div className='bg-[#f1f1f1] rounded-md w-[350px] h-[318px] flex justify-center items-center smallLaptop:w-[223px] smallLaptop:h-[318px] tsm:w-[327px] tsm:h-[120px] nsm:w-[310px]'>
              <div>
                <Image
                  src='/images/x59headphone.png'
                  width={190.81}
                  height={199}
                  alt='x59 headphones'
                  className='tsm:w-[79.58px] tsm:h-[83px]'
                />
              </div>
            </div>
            <div className='flex flex-col items-center mt-8 gap-8'>
              <p className='uppercase text-black font-manrope font-bold leading-[auto] tracking-[1.71px] text-[1.5rem]'>
                XX59
              </p>
              <div className=''>
                <Link
                  href='/'
                  className='bg-[#D87D4A] text-white w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-4 px-9'
                >
                  add to cart
                </Link>
              </div>
            </div>
          </div>

          {/* next */}
          <div>
            <div className='bg-[#f1f1f1] rounded-md w-[350px] h-[318px] flex justify-center items-center smallLaptop:w-[223px] smallLaptop:h-[318px] tsm:w-[327px] tsm:h-[120px] nsm:w-[310px]'>
              <div>
                <Image
                  src='/images/zx9speaker.png'
                  width={143.12}
                  height={172}
                  alt='speaker'
                  className='tsm:w-[71.56px] tsm:h-[83px]'
                />
              </div>
            </div>
            <div className='flex flex-col items-center mt-8 gap-8'>
              <p className='uppercase text-black font-manrope font-bold leading-[auto] tracking-[1.71px] text-[1.5rem]'>
                ZX9 speaker
              </p>
              <div className=''>
                <Link
                  href='/'
                  className='bg-[#D87D4A] text-white w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-4 px-9'
                >
                  add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherProducts;
