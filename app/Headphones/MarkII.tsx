import Image from 'next/image';
import Link from 'next/link';
const MarkII = () => {
  return (
    <>
      <section className='mt-[5rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:flex-col smallLaptop:gap-10 ysm:gap-4'>
        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px]'>
          <Image
            src='/images/markII.png'
            width={349.24}
            height={386}
            alt='headphones'
            className='smallLaptop:w-[220px] smallLaptop:h-[243px]'
          />
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center'>
          <p className='uppercase font-manrope font-regular text-[14px] tracking-[10px] text-[#d87d4a] mt-2'>
            NEW PRODUCT
          </p>
          <p className='max-w-[445px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] mt-4 smallLaptop:text-center smallLaptop:mt-4 ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[327px]'>
            XX99 Mark II Headphones
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-headphones1'
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
          <p className='max-w-[445px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-center smallLaptop:mt-4 ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[327px]'>
            XX99 Mark I Headphones
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-headphones2'
              className='bg-[#D87D4A] text-white max-w-[160px] lsm:w-[100px]  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-3 px-6 lsm:px-2 lsm:py-2'
            >
              see product
            </Link>
          </div>
        </div>

        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px] smallLaptop:order-1'>
          <Image
            src='/images/markI.png'
            width={295.84}
            height={385}
            alt='headphones'
            className='smallLaptop:w-[172.89px] smallLaptop:h-[225px]'
          />
        </div>
      </section>

      {/* another headphone */}
      <section className='mt-[5rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:flex-col smallLaptop:gap-10 ysm:gap-4'>
        <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[689px] smallLaptop:h-[352px] tsm:w-[540px] psm:w-[420px] ysm:w-[327px] xsm:w-[315px] ysm:h-[300px]'>
          <Image
            src='/images/x59headphone.png'
            width={372.98}
            height={389}
            alt='headphones'
            className='smallLaptop:w-[215.74px] smallLaptop:h-[225px]'
          />
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col smallLaptop:justify-center smallLaptop:items-center'>
          <p className='max-w-[400px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-center smallLaptop:mt-4 ysm:text-[1.75rem] ysm:leading-[auto] ysm:tracking-[1px] ysm:max-w-[250px]'>
            XX59 Headphones
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px] mt-4 smallLaptop:max-w-[572px] smallLaptop:text-center psm:w-[420px] ysm:w-[327px] xsm:w-[315px]'>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>

          <div className='mt-8 '>
            <Link
              href='/product-headphones3'
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

export default MarkII;
