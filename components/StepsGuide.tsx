import React from 'react'
import { Volkhov, Poppins } from 'next/font/google'
import { blue_orb, building, choose_destination, heart, leaf, map, send_2, trip_to_greece, trip_to_rome } from '@/public';
import Image from 'next/image';

const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const StepsGuide = () => {
  return (
    <div className='flex mb-48'>
      <div className=''>
        <h3 className={`text-[#5E6282] text-lg font-semibold ${poppins.className}`}>Easy and Fast</h3>
        <h2 className={`text-5xl font-bold text-[#14183E] mt-4 mb-14 ${volkhov.className}`}>Book your next trip<br />in 3 easy steps</h2>
        <div className='flex flex-col gap-12'>
          <div className="flex gap-5 w-[395px]">
            <div className='w-12 h-12 rounded-xl flex justify-center items-center bg-[#F0BB1F] flex-none'>
              <Image src={choose_destination} alt="Choose destination icon" />
            </div>
            <div>
              <h4 className='font-bold text-base mb-1'>Choose Destination</h4>
              <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
          <div className="flex gap-5 w-[395px]">
            <div className='w-12 h-12 rounded-xl flex justify-center items-center bg-[#F15A2B] flex-none'>
              <Image src={choose_destination} alt="Choose destination icon" />
            </div>
            <div>
              <h4 className='font-bold text-base mb-1'>Make Payment</h4>
              <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
          <div className="flex gap-5 w-[395px]">
            <div className='w-12 h-12 rounded-xl flex justify-center items-center bg-[#006380] flex-none'>
              <Image src={choose_destination} alt="Choose destination icon" />
            </div>
            <div>
              <h4 className='font-bold text-base mb-1'>Reach Airport on Selected Date</h4>
              <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center relative flex-1'>
        <div className='w-[370px] rounded-3xl shadow-xl p-6 flex-none bg-white z-10 relative'>
          <Image src={trip_to_greece} alt="Trip to greece picture" className='rounded-3xl w-full h-40 mb-6' />
          <div className='flex flex-col gap-6'>
            <div>
              <h5 className='mb-3 text-black text-lg'>Trip To Greece</h5>
              <p className='text-[#84829A]'>14-29 June | by Robbin Joseph</p>
            </div>

            <div className='flex gap-4'>
              <div className='w-9 h-9 flex justify-center items-center bg-[#F5F5F5] hover:bg-gray-200 rounded-full'>
                <Image src={leaf} alt="leaf icon" />
              </div>
              <div className='w-9 h-9 flex justify-center items-center bg-[#F5F5F5] hover:bg-gray-200 rounded-full'>
                <Image src={map} alt="map icon" />
              </div>
              <div className='w-9 h-9 flex justify-center items-center bg-[#F5F5F5] hover:bg-gray-200 rounded-full'>
                <Image src={send_2} alt="send icon" />
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-4 text-[#84829A]'>
                <Image src={building} alt="leaf icon" />
                <p>24 people going</p>
              </div>
              <Image src={heart} alt="heart icon" />
            </div>
          </div>
          <div className='shadow-xl rounded-2xl flex bg-white bottom-[110px] absolute -right-36 w-[300px] p-6 gap-3'>
            <Image src={trip_to_rome} alt="Trip to Rome image" className='w-12 h-12 rounded-full' />
            <div className='w-full'>
              <h5 className='font-medium text-sm text-[#84829A] mb-1'>Ongoing</h5>
              <h4 className='text-lg text-black mb-4'>Trip To Rome</h4>
              <div className='flex flex-col gap-[10px] w-full'>
                <p><span className='text-[#8A79DF]'>40%</span> completed</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-[#8A79DF] h-1.5 rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>
          <Image src={blue_orb} alt="blue orb" className='absolute -top-5 -right-20 -z-10' />
        </div>
      </div>
    </div>
  )
}

export default StepsGuide