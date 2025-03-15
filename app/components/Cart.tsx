'use client';
import Image from 'next/image';
import { useCart } from './CartContext';

const Cart = () => {
  const {
    cart,
    clearCart,
    isCartOpen,
    increaseQuantity,
    decreaseQuantity,
    checkOut,
  } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Background Overlay (excludes navbar) */}
      {isCartOpen && (
        <div className='fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-black bg-opacity-50 backdrop-blur-sm z-40'></div>
      )}

      {/* Cart Component */}
      <section
        className={`fixed top-[6rem] right-[7.5rem] w-[377px]  bg-white shadow-lg transition-transform duration-300 z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {cart.length === 0 ? (
          <div className='flex justify-center items-center pt-6 pb-6 mx-auto'>
            <p className='px-4'>
              Your Cart is empty. Please order items of your choice on the
              website.
            </p>
          </div>
        ) : (
          <div className='flex justify-center flex-col mx-auto max-w-[313px] pb-8'>
            <div className='flex flex-row  gap-[149px] mt-4'>
              <p className='font-manrope font-bold text-black text-[18px] leading-[auto] tracking-[1.29px] uppercase'>
                Cart ({cart.length})
              </p>
              <button
                onClick={clearCart}
                className='font-manrope font-medium text-black text-[15px] leading-[25px] tracking-[0px] opacity-50'
              >
                Remove all
              </button>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className='flex flex-row  items-center  justify-between mt-4'
              >
                <div className='w-[64px] h-[64px] bg-[#f1f1f1] rounded-sm flex justify-center items-center'>
                  <Image
                    src={item.image}
                    width={36.19}
                    height={40}
                    alt='image from gadgets'
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='text-black font-manrope text-[15px] font-bold leading-[25px] tracking-normal'>
                    {item.name}
                  </p>
                  <p className='text-black font-manrope text-[15px] font-bold leading-[25px] tracking-normal'>
                    ${item.price}
                  </p>
                </div>
                <div className='w-[96px] h-[32px] bg-[#f1f1f1] flex flex-row justify-evenly items-center gap-2 '>
                  <button
                    className='opacity-25 leading-[auto] tracking-[1px] font-manrope font-bold text-[13px] text-black hover:text-[#D87D4A]'
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className='opacity-25 leading-[auto] tracking-[1px] font-manrope font-bold text-[13px] text-black hover:text-[#D87D4A]'
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className='flex flex-row gap-[149px] mt-4  justify-between'>
              <div>
                <p className='font-manrope text-[15px] font-medium leading-[25px] tracking-[0px] text-black opacity-50'>
                  Total
                </p>
              </div>

              <div>
                <p className='font-manrope text-[18px] font-medium leading-[auto] tracking-[0px] text-black'>
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
            <div className='mt-4'>
              <button
                onClick={checkOut}
                className='text-white uppercase font-manrope text-[13px] font-bold leading-[auto] tracking-[1px] bg-[#d87d4a]  h-[48px] px-[7.3rem] py-3'
              >
                checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
