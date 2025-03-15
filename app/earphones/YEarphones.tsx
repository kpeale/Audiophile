import Image from 'next/image';
import Link from 'next/link';

const YEarphones = () => {
  return (
    <>
      <section className='mt-[5rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:flex-col smallLaptop:gap-10 ysm:gap-4'>
        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px]'>
          <Image
            src='/images/yearphones.png'
            width={296}
            height={298}
            alt='headphones'
            className='smallLaptop:w-[242px] smallLaptop:h-[244px]'
          />
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center'>
          <p className='uppercase font-manrope font-regular text-[14px] tracking-[10px] text-[#d87d4a] mt-2'>
            NEW PRODUCT
          </p>
          <p className='max-w-[445px] mt-4  text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-center  ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[327px]'>
            YX1 WIRELESS EARPHONES
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-earphones'
              className='bg-[#D87D4A] text-white max-w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-3 px-6 lsm:px-2 lsm:py-2'
            >
              see product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default YEarphones;
