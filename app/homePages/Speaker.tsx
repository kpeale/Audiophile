import Image from 'next/image';
import Link from 'next/link';

const Speaker = () => {
  return (
    <section className='bg-[#d87d4a] max-w-[1110px] smallLaptop:max-w-[689px] tsm:max-w-[600px] psm:max-w-[500px] ysm:max-w-[327px]  h-[560px] smallLaptop:h-[720px] psm:h-[600px] ysm:h-[600px]  mx-auto my-[8rem] rounded-lg relative flex flex-row'>
      <div>
        <div className='ml-[-3.5rem] opacity-30'>
          <Image
            src='/images/circle1.png'
            width={944}
            height={944}
            alt='circle'
            className='smallLaptop:hidden'
          />
        </div>

        <div className='mt-[-30rem] opacity-30 ml-[4rem] smallLaptop:mt-[0rem] tsm:ml-[8rem] psm:ml-[6rem] ysm:ml-1 '>
          <Image
            src='/images/circle2.png'
            width={542}
            height={542}
            alt='circle'
            className='flex smallLaptop:hidden'
          />

          <Image
            src='/images/ovalMobileLg.png'
            width={542}
            height={542}
            alt='circle'
            className='hidden smallLaptop:flex tsm:hidden'
          />

          <Image
            src='/images/ovalBigmobile.png'
            width={320}
            height={320}
            alt='circle'
            className='hidden tsm:block'
          />
        </div>

        <div className='mt-[-22rem] opacity-30 ml-[6rem] smallLaptop:mt-[-28.5rem]  tsm:mt-[-19rem] tsm:ml-[9rem] psm:ml-[7rem] ysm:ml-5 ysm:mt-[-19rem]'>
          <Image
            src='/images/circle2.png'
            width={472}
            height={472}
            alt='circle'
            className='flex  smallLaptop:hidden'
          />

          <Image
            src='/images/ovalMobilesmall.png'
            width={472}
            height={472}
            alt='circle'
            className='hidden smallLaptop:block tsm:hidden'
          />

          <Image
            src='/images/mobileOval.png'
            width={279}
            height={279}
            alt='circle'
            className='hidden tsm:block'
          />
        </div>
        <div className='absolute  z-10 top-[6.1rem] left-[7.5rem] smallLaptop:left-[15rem] smallLaptop:top-12 tsm:left-[12rem] tsm:top-[3rem] psm:left-[10rem] ysm:left-[5rem] '>
          <Image
            width={410.23}
            height={493}
            src='/images/speakerSection.png'
            alt='ZX9 Speaker'
            className='smallLaptop:max-w-[197.21px] smallLaptop:h-[237px] tsm:max-w-[172.25px] tsm:h-[207px] ysm:max-w-[150px] ysm:h-[180px] '
          />
        </div>
      </div>

      <div className='absolute z-10 right-[1.8rem] top-[8rem] smallLaptop:top-[22rem] smallLaptop:left-[13rem] smallLaptop:right-0 tsm:left-[11rem] tsm:top-[18rem] psm:left-[9rem] psm:top-[18.5rem] ysm:left-[4rem]'>
        <h2 className='text-white max-w-[261px] font-manrope font-bold leading-[3.625rem] tracking-[2px] text-[3.5rem] uppercase smallLaptop:text-center tsm:max-w-[200px] tsm:text-[2.25rem] tsm:leading-[2.5rem] tsm:tracking-[1.29px]'>
          ZX9 Speaker
        </h2>
        <p className='text-white max-w-[349px] font-medium font-manrope opacity-75 text-[15px] leading-[25px] mt-[1.5rem] psm:max-w-[300px] tsm:text-center tsm:ml-[-2rem] ysm:z-5'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <div className='mt-[4rem] smallLaptop:absolute left-12 smallLaptop:mt-[2rem] tsm:left-10 ysm:left-6'>
          <Link
            href='/'
            className='px-7 py-5 ysm:py-3 hover:bg-[#4c4c4c] text-white font-manrope font-bold uppercase leading-none bg-[#000000] '
          >
            See Product
          </Link>
        </div>
      </div>
      <div className='smallLaptop:absolute smallLaptop:top-[-1rem] tsm:top-[-2rem] ysm:top-0 ysm:z-10 smallLaptop:opacity-30'>
        <Image
          src='/images/circleMobile.png'
          width={944}
          height={944}
          alt='circle'
          className='hidden smallLaptop:flex ysm:hidden'
        />

        <Image
          src='/images/upsideCircle.png'
          width={558}
          height={558}
          alt='circle'
          className='hidden  ysm:flex'
        />
      </div>
    </section>
  );
};

export default Speaker;
