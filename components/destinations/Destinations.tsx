import React from 'react'
import Destination from './Destination';
import { destinations } from '@/constants';
import { Volkhov, Poppins } from 'next/font/google'

const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Destinations = () => {
  return (
    <div className="text-center mt-28 pb-20 debig">
      <h3 className={`uppercase text-[#5E6282] text-lg font-semibold ${poppins.className}`}>Top Selling</h3>
      <h2 className={`text-5xl font-bold text-[#14183E] mt-4 mb-14 ${volkhov.className}`}>Top Destinations</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {
          destinations.map((destination, index) => (
            <Destination key={index} destination={destination} />
          ))
        }
      </div>
    </div>
  )
}

export default Destinations