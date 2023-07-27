import React from 'react'
import { Volkhov, Poppins } from 'next/font/google'
import { blue_orb, building, choose_destination, heart, leaf, map, send_2, trip_to_greece, trip_to_rome } from '@/public';
import Image from 'next/image';
const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Testimonials = () => {
  return (
    <div className='flex'>
      <div className=''>
        <h3 className={`text-[#5E6282] text-lg font-semibold ${poppins.className}`}>Testimonials</h3>
        <h2 className={`text-5xl font-bold text-[#14183E] mt-4 mb-14 leading-relaxed ${volkhov.className}`}>What People Say<br /> About Us.</h2>

      </div>
    </div>
  )
}

export default Testimonials