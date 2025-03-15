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
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p className='mt-4'>
              Discover clear, more natural sounding highs than the competition
              with ZX9’s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You’ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
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
                Speaker Unit
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                2x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                Speaker Cloth Panel
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
                3.5mm 10m Audio Cable
              </p>
            </div>

            <div className='flex flex-row gap-6 '>
              <p className='font-bold font-manrope text-[15px] text-[#d87d4a] leading-[25px]'>
                1x
              </p>
              <p className='text-black opacity-50 text-[15px] font-manrope font-medium leading-[25px]'>
                10mm Optical Cable
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
