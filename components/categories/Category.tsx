import React from 'react'
import Image from 'next/image'

type CategoryType = {
  title: string;
  description: string;
  logo: string;
}

const Category = ({ category }: { category: CategoryType }) => {

  const { title, description, logo } = category;

  return (
    <div className='rounded-[36px] flex flex-col gap-5 items-center p-9 hover:shadow-xl duration-200 transition'>
      <Image src={logo} alt="category_description" className='w-28 aspect-[3/3] object-contain' />
      <div className='w-[200px] flex flex-col gap-4'>
        <h4 className='font-semibold text-xl text-[#1E1D4C]'>{title}</h4>
        <p className='text-[#5E6282] font-medium text-base'>{description}</p>
      </div>
    </div>
  )
}

export default Category