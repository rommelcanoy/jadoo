import React from 'react'
import Category from './Category';
import { categories } from '@/constants';
import { Volkhov, Poppins } from 'next/font/google'

const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Categories = () => {
  return (
    <div className="text-center mt-28 pb-20">
      <h3 className={`uppercase text-[#5E6282] text-lg font-semibold ${poppins.className}`}>Category</h3>
      <h2 className={`text-5xl font-bold text-[#14183E] mt-4 mb-14 ${volkhov.className}`}>We Offer Best Services</h2>
      <div className='flex gap-12'>
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