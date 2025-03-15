'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
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
      id: 3,
      name: 'XX59 Headphones',
      price: 899,
      quantity: order,
      image: '/images/x59headphone.png',
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
              src='/images/x59headphone.png'
              width={372.98}
              height={389}
              alt='headphones'
              className='smallLaptop:w-[185.05px] smallLaptop:h-[207px]'
            />
          </div>
        </div>

        <div className='smallLaptop:flex smallLaptop:flex-col '>
          <p className='max-w-[400px] smallLaptop:max-w-[250px] text-black leading-[2.75rem] tracking-[1.43px] font-bold uppercase text-[2.5rem] smallLaptop:text-[1.75rem] smallLaptop:leading-[32px] tsm:leading-[auto] smallLaptop:tracking-[1px] '>
            XX59 Headphones
          </p>
          <p className='opacity-50 font-medium font-manrope text-[15px] text-black leading-[1.563rem] max-w-[445px]  smallLaptop:max-w-[339px]   ysm:w-[327px] xsm:w-[315px] mt-4'>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>

          <p className='font-bold font-manrope text-black leading-[auto] tracking-[1.29px] text-[1.125rem] mt-6'>
            $899
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
