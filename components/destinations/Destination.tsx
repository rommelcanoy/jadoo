import React from 'react'
import Image from 'next/image'
import { navigation } from '@/public';
import { Volkhov, Poppins } from 'next/font/google'
import format_money from '@/utils/format_money';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

type DestinationType = {
  title: string;
  image: any;
  price: number;
  days: number;
};

const Destination = ({ destination }: { destination: DestinationType }) => {

  const { title, image, price, days } = destination;

  const formatted_price = format_money(price);

  return (
    <div className='shadow-lg hover:shadow-2xl duration-200 transition overflow-hidden rounded-3xl'>
      <div className='h-[327px]'>
        <Image src={image} className="object-cover h-full" alt="Destination image" />
      </div>
      <div className='h-32 font-medium text-[#5E6282] bg-white p-6'>
        <div className={`flex justify-between text-lg ${poppins.className}`}>
          <p>{title}</p>
          <p>{formatted_price}</p>
        </div>
        <div className='mt-5 flex gap-3'>
          <Image src={navigation} alt="days icon" className='' />
          <p className='text-base'>{days} Days Trip</p>
        </div>
      </div>
    </div>
  )
}

export default Destination