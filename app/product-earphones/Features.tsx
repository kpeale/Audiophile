import React from 'react';

const Features = () => {
  return (
    <>
      <section className='flex flex-row gap-[125px] smallLaptop:flex-col mt-[8rem] max-w-[1110px] mx-auto smallLaptop:items-center tab:mt-[5rem] tsm:gap-[70px]'>
        <div>
          <h3 className='font-manrope text-[2rem] font-bold text-black leading-9 tracking-[1.14px]'>
            FEATURES
          </h3>
          <div className='max-w-[635px] smallLaptop:max-w-[689px] font-manrope font-medium text-black opacity-50 leading-[25px] tracking-normal mt-[1.5rem] tsm:max-w-[327px] nsm:w-[310px]'>
            <p>
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p className='mt-4'>
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-row smallLaptop:w-[549px] smallLaptop:gap-[125px] tsm:flex-col tsm:gap-0  tsm:items-start  tsm:w-[327px] nsm:w-[310px]'>
          <h3 className='uppercase font-manrope text-[2rem] font-bold text-black leading-9 tracking-[1.14px] smallLaptop:ml-[-4rem] tab:ml-0'>
            in the box
          </h3>

          <div className='flex flex-col gap-2 mt-[1.5rem] smallLaptop:mt-0 tsm:mt-[1.5rem] '>
            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                2x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Earphone Unit
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                6x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Multi-size Earplugs
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                User Manual
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                USB-C Charging Scale
              </p>
            </div>
            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Travel Pouch
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
