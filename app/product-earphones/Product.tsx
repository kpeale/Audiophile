'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../components/CartContext';

const Product = () => {
  const router = useRouter();
  const [order, setOrder] = useState(1);
  const { addToCart } = useCart();
  function increaseOrder() {
    setOrder(order + 1);
  }

  function decreaseOrder() {
    setOrder(order - 1);
    if (order === 0) return setOrder(order);
  }

  function handleAddToCart() {
    addToCart({
      id: 6,
      name: 'YX1 WIRELESS EARPHONES',
      price: 599,
      quantity: order,
      image: '/images/yearphones.png',
    });
  }
  return (
    <>
      <section className='mt-[3rem] bg-white flex flex-row justify-center items-center mx-auto gap-[125px] smallLaptop:gap-[69px] tab:gap-[40px] tsm:flex-col ysm:gap-4'>
        <div className='flex flex-col gap-10'>
          <div>
            <button
              onClick={() => router.back()}
              className='text-black opacity-50 font-manrope font-medium text-[15px] leading-[25px]'
            >
              Go Back
            </button>
          </div>
          <div className='bg-[#f1f1f1] w-[540px] h-[560px] rounded-[8px] flex justify-center items-center smallLaptop:w-[281px] smallLaptop:h-[480px] tsm:w-[327px] nsm:w-[310px] tsm:h-[327px]'>
            <Image
              src='/images/yearphones.png'
              width={296}
              height={298}
              alt='headphones'
              className='smallLaptop:w-[185px] smallLaptop:h-[215px]'
            />
          </div>
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col '>
          <p className='uppercase font-manrope font-regular text-[14px] leading-[auto] tracking-[10px] smallLaptop:text-[12px] smallLaptop:tracking-[8.57px] text-[#d87d4a] mt-2 tsm:text-[14px] tsm:tracking-[10px]'>
            NEW PRODUCT
          </p>
          <p className='max-w-[445px] smallLaptop:max-w-[339px] mt-4 smallLaptop:mt-2 ysm:max-w-[327px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-[1.75rem] smallLaptop:leading-[32px] tsm:leading-[auto] smallLaptop:tracking-[1px] '>
            YX1 WIRELESS EARPHONES
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px]  smallLaptop:max-w-[339px]   ysm:w-[327px] xsm:w-[315px] mt-4'>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>

          <p className='font-bold font-manrope text-black leading-[auto] tracking-[1.29px] text-[1.125rem] mt-6'>
            $599
          </p>

          <div className='flex flex-row gap-4 mt-6 items-center'>
            <div className='w-[120px] h-[48px] bg-[#f1f1f1] flex flex-row justify-evenly items-center gap-4 '>
              <button
                className='opacity-25 leading-[auto] tracking-[1px] font-manrope font-bold text-[13px] text-black hover:text-[#D87D4A]'
                onClick={decreaseOrder}
              >
                -
              </button>
              <p>{order}</p>
              <button
                className='opacity-25 leading-[auto] tracking-[1px] font-manrope font-bold text-[13px] text-black hover:text-[#D87D4A]'
                onClick={increaseOrder}
              >
                +
              </button>
            </div>

            <div className=''>
              <button
                onClick={handleAddToCart}
                className='bg-[#D87D4A] text-white  h-[48px] uppercase font-manrope text-[13px] lsm:text-[11px] leading-[1px] font-bold hover:bg-[#FBAF85] py-4 px-9'
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
