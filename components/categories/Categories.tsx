import React from 'react'
import Category from './Category';
import { categories } from '@/constants';
import { Volkhov, Poppins } from 'next/font/google'

const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Categories = () => {
  return (
    <div className="text-center mt-14 md:mt-28 pb-10 md:pb-20">
      <h3 className={`uppercase text-[#5E6282] text-lg font-semibold ${poppins.className}`}>Category</h3>
      <h2 className={`text-2xl md:text-5xl font-bold text-[#14183E] mt-4 mb-8 md:mb-14 ${volkhov.className}`}>We Offer Best Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12'>
        {
          categories.map((category, index) => (
            <Category key={index} category={category} />
          ))
        }
      </div>
    </div>
  )
}

export default Categories