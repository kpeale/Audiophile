import Image from 'next/image';
import Link from 'next/link';

const ZSpeaker = () => {
  return (
    <>
      <section className='mt-[5rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:flex-col smallLaptop:gap-10 ysm:gap-4'>
        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px]'>
          <Image
            src='/images/zx9speaker.png'
            width={291.24}
            height={350}
            alt='speakers'
            className='smallLaptop:w-[202.2px] smallLaptop:h-[243px]'
          />
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center'>
          <p className='uppercase font-manrope font-regular text-[14px] tracking-[10px] text-[#d87d4a] mt-2'>
            NEW PRODUCT
          </p>
          <p className='max-w-[250px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] mt-4 smallLaptop:text-center smallLaptop:mt-4 ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[150px]'>
            ZX9 SPEAKER
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-speaker1'
              className='bg-[#D87D4A] text-white max-w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-3 px-6 lsm:px-2 lsm:py-2'
            >
              see product
            </Link>
          </div>
        </div>
      </section>

      {/* another headphone */}
      <section className='mt-[5rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:flex-col smallLaptop:gap-10 ysm:gap-4'>
        <div className='smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center smallLaptop:order-2'>
          <p className='max-w-[250px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-center smallLaptop:mt-4 ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[150px]'>
            ZX7 SPEAKER
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-speaker2'
              className='bg-[#D87D4A] text-white max-w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-3 px-6 lsm:px-2 lsm:py-2'
            >
              see product
            </Link>
          </div>
        </div>

        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px] smallLaptop:order-1'>
          <Image
            src='/images/zx7speaker.png'
            width={268.02}
            height={385}
            alt='speakers'
            className='smallLaptop:w-[169.17px] smallLaptop:h-[243px]'
          />
        </div>
      </section>
    </>
  );
};

export default ZSpeaker;
