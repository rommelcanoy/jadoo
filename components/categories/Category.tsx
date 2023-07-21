import React from 'react'
import Image from 'next/image'

type CategoryType = {
  logo: string,
  title: string,
  description: string,
}

const Category = ({logo, title, description} : CategoryType) => {
  return (
    <div>
      <Image src="" alt="category_description" />
    </div>
  )
}

export default Category