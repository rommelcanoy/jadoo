import React from 'react'
import Image from 'next/image'
import { apple, available_in_apple_store, facebook, get_it_on_google_play, google_play, instagram, jadoo, twitter } from '@/public'

const Footer = () => {
  return (
    <div className='py-20'>
      <div className='grid grid-cols-5 gap-10'>
        <div>
          {/* <h3 className='text-5xl text-black'>Jadoo</h3> */}
          <Image src={jadoo} alt="Jadoo Logo" className='w-[100px] mb-5' />
          <p>Book your trip in minute, get full control for much longer.</p>
        </div>
        <div>
          <h4 className='text-[#080809] font-bold text-xl mb-7'>Company</h4>
          <ul className='text-lg flex flex-col gap-2'>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h4 className='text-[#080809] font-bold text-xl mb-7'>Contact</h4>
          <ul className='text-lg flex flex-col gap-2'>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Afillates</li>
          </ul>
        </div>
        <div>
          <h4 className='text-[#080809] font-bold text-xl mb-7'>More</h4>
          <ul className='text-lg flex flex-col gap-2'>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className='w-[214px]'>
          <div className='flex gap-6 mb-7'>
            <a href="#" className='w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100 shadow-md'>
              <Image src={facebook} alt="facebook icon" />
            </a>
            <a href="#" className='w-10 h-10 flex justify-center bg-gray-900 items-center rounded-full hover:bg-gray-700 shadow-md'>
              <Image src={instagram} alt="instagram icon" />
            </a>
            <a href="#" className='w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100 shadow-md'>
              <Image src={twitter} alt="twitter icon" />
            </a>
          </div>
          <div>
            <p>Discover our App</p>
          </div>
          <div className='flex gap-2 mt-4'>
            <a href="#" className='flex gap-1 bg-black rounded-2xl py-2 px-4 hover:bg-gray-800'>
              <Image src={google_play} alt="Google play icon" />
              <Image src={get_it_on_google_play} alt="Google play description" />
            </a>
            <a href="#" className='flex gap-1 bg-black rounded-2xl py-2 px-4 hover:bg-gray-800'>
              <Image src={apple} alt="Apple icon" />
              <Image src={available_in_apple_store} alt="Apple description" />
            </a>
          </div>
        </div>
      </div>
      <div className='pt-20 text-center'>
        <p>All rights reserved @ Rommel Canoy</p>
      </div>
    </div>
  )
}

export default Footer