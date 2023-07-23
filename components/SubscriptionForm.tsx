import { glitter_2, mail, send, send_2, spiral_1, spiral_2 } from '@/public'
import React from 'react'
import Image from 'next/image';

const SubscriptionForm = () => {
  return (
    <div className="bg-[#F9F7FE] relative p-20 rounded-3xl rounded-tl-[129px] mb-28">
      <h3 className='text-center font-semibold text-3xl'>
        Subscribe to get information, latest news and other <br />
        interesting offers about Jadoo
      </h3>
      <div className='flex gap-6 justify-center mt-20'>
        <div className='relative w-[421px] z-20'>
          <Image src={mail} alt="Mail icon" className='absolute top-1/2 transform -translate-y-1/2 left-8' />
          <input type="email" placeholder='Your email' className='w-full rounded-lg text-sm text-black font-normal h-full outline-none px-8 pl-16' />
        </div>
        <button className='bg-gradient-to-tl from-[#FF816A] via-[#FF8269] to-[#FF936D] py-5
         px-12 text-white rounded-lg transition-all hover:bg-gradient-to-tl 
         hover:from-[#FF936D] hover:via-[#FF8269] hover:to-[#FF816A]'>
          Subscribe
        </button>
      </div>
      <Image src={spiral_1} alt="Spiral 1" className='absolute left-4 bottom-0 z-0 opacity-10' />
      <Image src={spiral_2} alt="Spiral 2" className='absolute right-0 top-0 z-0' />
      <button className='bg-gradient-to-tl from-[#5E3BE1] to-[#747DEF] w-[70px] h-[70px] rounded-full text-white z-20 absolute -right-4 -top-4
      transition ease-in-out delay-150 duration-300 hover:from-[#747DEF] hover:to-[#5E3BE1] flex justify-center items-center'>
        <div className='relative mt-1'>
          <div className='w-[13px] h-[2px] bg-[#5E3BE1] absolute top-1/2 transform -translate-y-1/2 left-[7px] rounded-md -rotate-[30deg]'></div>
          <Image src={send} alt="Send icon" className='' />
        </div>
      </button>
      <Image src={glitter_2} alt="Glitter 2" className="absolute -right-20 -bottom-16 -z-10" />
    </div>
  )
}

export default SubscriptionForm