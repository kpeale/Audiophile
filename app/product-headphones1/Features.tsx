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
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat
            </p>
            <p className='mt-4'>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aestheti
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

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Travel Bag
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
