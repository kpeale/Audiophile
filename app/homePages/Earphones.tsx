import Image from 'next/image';
import Link from 'next/link';

const Earphones = () => {
  return (
    <section className='mt-[4rem] tsm:mt-[2rem] ysm:mt-[1.5rem] flex flex-row justify-center items-center gap-[2rem] smallLaptop:gap-2 tsm:gap-[2rem] ysm:gap-6 tsm:flex-col'>
      <div>
        <Image
          src='/images/earphones.png'
          width={540}
          height={320}
          alt='earphones'
          className='rounded-sm smallLaptop:w-[339px] tsm:w-[600px] psm:w-[500px]  ysm:w-[320px] ysm:h-[200px]'
        />
      </div>

      <div className='bg-[#f1f1f1] w-[540px]  h-[320px] rounded-md smallLaptop:w-[339px]  smallLaptop:h-[200px] ysm:max-w-[320px] tsm:w-[600px] tsm:h-[320px] psm:w-[500px] psm:h-[200px]'>
        <div className='pt-[7rem] pl-[5rem]  smallLaptop:pl-7 smallLaptop:pt-10 tsm:pt-[6rem] psm:pt-[3rem]'>
          <p className='uppercase  font-manrope font-bold text-black tracking-[2px] text-[28px]'>
            Y X 1 earphones
          </p>
          <div className='mt-[2rem] tsm:mt-[3rem] psm:mt-[1.5rem]'>
            <Link
              href='/'
              className='px-9 py-4 border-black border-[1px] hover:bg-[#000000] text-black text-[13px] leading-[1px] hover:text-white font-manrope font-bold uppercase  bg-transparent '
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earphones;
