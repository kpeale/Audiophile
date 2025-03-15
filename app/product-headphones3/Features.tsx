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
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p className='mt-4'>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C
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
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Headphone Unit
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                2x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Replacement Earcups
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
                3.5mm 5m Audio Cable
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
