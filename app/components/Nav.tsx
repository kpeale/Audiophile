'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useCart } from './CartContext';

const Nav = () => {
  const { isCartOpen, toggleCart } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className='bg-[#0e0e0e] relative top-0 left-0 w-full h-[80px] ysm:h-[100px]'>
        <nav className='container max-w-[1109px] minLaptop:max-w-[880px] lg:max-w-[689px] tab:max-w-[600px] psm:max-w-[550px] mx-auto flex flex-row justify-between items-center py-6 ysm:py-3'>
          <button
            className='hidden lg:block ysm:p-4 focus:outline-none '
            onClick={toggleMobileMenu}
          >
            <Image
              src='/images/menubar.png'
              width={16}
              height={15}
              alt='Menu'
            />
          </button>
          <div className='ysm:flex-none lg:flex-1 lg:ml-8 ysm:ml-0'>
            <Link href='/'>
              <Image
                src='/images/audiophileLogo.png'
                width={143}
                height={25}
                alt='Audiophile Logo'
              />
            </Link>
          </div>

          <div className='flex flex-row items-center justify-center mx-auto my-0 gap-[34px] lg:hidden'>
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

          <div className=' lg:ml-0 ml-auto ysm:p-4'>
            <button onClick={toggleCart}>
              <Image
                src='/images/cartIcon.png'
                width={23.33}
                height={20}
                alt='Cart'
              />
            </button>
            {isCartOpen && <Cart />}
          </div>
        </nav>

        <div className='container max-w-[1109px] minLaptop:max-w-[880px] lg:max-w-[689px] tab:max-w-[600px] psm:max-w-[550px] mx-auto border-b-[1px] border-[#979797] minLaptop:relative minLaptop:z-[999]'></div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className='absolute top-full left-5 w-[250px] h-[300px] bg-white flex flex-col items-center justify-center space-y-6 z-50 rounded-xl'
          >
            {/* Mobile Menu Drawer */}
            <Link
              href='/'
              onClick={() => setIsMobileMenuOpen(false)}
              className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-black uppercase'
            >
              Home
            </Link>
            <Link
              href='/Headphones'
              onClick={() => setIsMobileMenuOpen(false)}
              className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-black uppercase'
            >
              Headphones
            </Link>
            <Link
              href='/speaker'
              onClick={() => setIsMobileMenuOpen(false)}
              className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-black uppercase'
            >
              Speakers
            </Link>
            <Link
              href='/earphones'
              onClick={() => setIsMobileMenuOpen(false)}
              className='font-manrope font-bold text-[13px] leading-[25px] tracking-[2px] text-black uppercase'
            >
              Earphones
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
