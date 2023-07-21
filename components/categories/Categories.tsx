import React from 'react'
import Image from 'next/image';
import Category from './Category';

const Categories = () => {
  return (
    <div>
      <h3 className='uppercase'>Category</h3>
      <h2>We Offer Best Services</h2>
      <Category logo={'logo test'} title={'category title'} description={'lorem ipsum'} />
    </div>
  )
}

export default Categories