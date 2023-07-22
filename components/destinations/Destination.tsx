import React from 'react'
import Image from 'next/image'

type DestinationType = {
  title: string;
  image: string;
  price: number;
  days: number;
};

const Destination = ({ destination }: { destination: DestinationType }) => {

  const { title, image, price, days } = destination;

  return (
    <div>
      <div>
        <Image src={image} alt="Destination image" />
      </div>
    </div>
  )
}

export default Destination