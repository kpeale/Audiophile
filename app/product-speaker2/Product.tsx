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
      id: 5,
      name: ' ZX7 Speaker',
      price: 3500,
      quantity: order,
      image: '/images/zx7speaker.png',
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
              src='/images/zx7speaker.png'
              width={268.02}
              height={385}
              alt='headphones'
              className='smallLaptop:w-[140.62px] smallLaptop:h-[216px]'
            />
          </div>
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col '>
          <p className='max-w-[250px] smallLaptop:max-w-[150px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-[1.75rem] smallLaptop:leading-[32px] tsm:leading-[auto] smallLaptop:tracking-[1px] '>
            Z X 7 Speaker
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px]  smallLaptop:max-w-[339px]   ysm:w-[327px] xsm:w-[315px] mt-4'>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>

          <p className='font-bold font-manrope text-black leading-[auto] tracking-[1.29px] text-[1.125rem] mt-6'>
            $3,500
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
