import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='bg-[#101010] flex justify-center items-center mx-auto flex-col pt-14 pb-8  relative'>
      <div className='flex flex-row gap-[550px] smallLaptop:flex-col smallLaptop:gap-4 smallLaptop:justify-start smallLaptop:items-start smallLaptop:ml-[-13rem] tsm:ml-0 tsm:justify-center tsm:items-center tsm:gap-8'>
        <div className=''>
          <div className='container w-[101px] h-[4px] border-t-[5px] border-[#d87d4a] absolute top-0  '></div>
          <Link href='/'>
            <Image
              src='/images/audiophileLogo.png'
              width={143}
              height={25}
              alt='Audiophile Logo'
              className=''
            />
          </Link>
        </div>

        <div className='flex flex-row items-center justify-center mx-auto my-0 gap-[34px] smallLaptop:justify-start smallLaptop:items-start tsm:flex-col tsm:justify-center tsm:items-center tsm:gap-[15px]'>
          <Link
            href='/'
            className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-white uppercase hover:text-[#d87d4a]'
          >
            Home
          </Link>
          <Link
            href='/Headphones'
            className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-white uppercase hover:text-[#d87d4a]'
          >
            Headphones
          </Link>
          <Link
            href='/speaker'
            className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-white uppercase hover:text-[#d87d4a]'
          >
            Speakers
          </Link>
          <Link
            href='/earphones'
            className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-white uppercase hover:text-[#d87d4a]'
          >
            Earphones
          </Link>
        </div>
      </div>

      <div className='flex flex-row gap-[480px] smallLaptop:gap-0 smallLaptop:justify-center tsm:flex-col  tsm:gap-8'>
        <div className='opacity-50 font-manrope font-medium text-[15px] leading-[25px] mt-6 text-white'>
          <p className='max-w-[540px] smallLaptop:w-[689px] tsm:w-[327px] xsm:w-[300px]'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <p className='mt-6'>Copyright 2025. All Rights Reserved</p>
        </div>

        <div className='flex flex-row gap-4 justify-center items-center smallLaptop:justify-end smallLaptop:items-end  tsm:justify-center tsm:items-center'>
          <div>
            <Image
              src='/images/facebookImg.png'
              width={24}
              height={24}
              alt='facebook icon'
              className='hover:bg-[#d87d4a]'
            />
          </div>

          <div>
            <Image
              src='/images/twitterImg.png'
              width={24}
              height={19.5}
              alt='facebook icon'
              className='hover:bg-[#d87d4a]'
            />
          </div>

          <div>
            <Image
              src='/images/instagramImg.png'
              width={24}
              height={24}
              alt='instagram icon'
              className='hover:bg-[#d87d4a]'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
