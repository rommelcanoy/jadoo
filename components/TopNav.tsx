import React from 'react'
import Image from 'next/image'
import jadoo from '../public/assets/business_logos/jadoo.svg'
import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] })

const TopNav = () => {
  return (
    <>
      <div className={`md:mx-auto md:flex md:justify-between items-center pt-5 pb-4 mb-8 md:mb-0 md:px-0 ${open_sans.className} text-[#212832]`}>
        <div>
          <Image src={jadoo} alt="Jadoo Logo" className='w-[100px]' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-12 font-medium text-base items-center'>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li className=''>
              <a href="#" className=''>Flights</a>
            </li>
            <li>
              <a href="#">Bookings</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li className='py-2 px-5 rounded-md border-black border'>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default TopNav