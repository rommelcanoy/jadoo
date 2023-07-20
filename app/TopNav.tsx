import React from 'react'
import Image from 'next/image'
import jadoo from '../public/assets/business_logos/jadoo.svg'

const TopNav = () => {
  return (
    <>
      <div className='mx-auto flex justify-between items-center mt-5 mb-4'>
        <div>
          <Image src={jadoo} alt="Jadoo Logo" className='w-[100px]' />
        </div>
        <div>
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