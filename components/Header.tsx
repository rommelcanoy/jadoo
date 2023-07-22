import React from 'react'
import Image from 'next/image';
import decore from '../public/assets/Decore.svg';
import traveller from '../public/assets/Traveller2.png';
import orange_decore from '../public/assets/orange_decore.svg';
import ellipse from '../public/assets/ellipse.svg';
import play from '../public/assets/play.svg';
import Link from 'next/link';
import { Volkhov, Poppins } from 'next/font/google'

const volkhov = Volkhov({ weight: '700', subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] })

const Header = () => {
  return (
    <div>
      <div className='hidden md:block md:absolute md:-left-80 md:-top-48 -z-10'>
        <Image src={ellipse} alt="decore" className='-z-30' />
      </div>
      <div className='hidden md:block md:absolute md:right-0 md:top-0 -z-10'>
        <Image src={decore} alt="decore" className='w-full h-full' />
      </div>
      <div className='mt-16 flex justify-between '>
        <div className='flex md:w-[632px] items-center'>
          <div>
            <h2 className={`uppercase ${poppins.className} font-bold text-xl text-[#DF6951] mb-4`}>Best Destinations Around The World</h2>
            <h1 className={`${volkhov.className} font-bold text-[84px] leading-[1.1] relative ] text-[#181E4B]`}>
              Travel, <span className='relative'>enjoy</span> <br />
              and live a new <br />
              and full life  <br />
              <Image src={orange_decore} alt="Orange decoration" className='absolute top-[80px] -z-10 -right-5' />
            </h1>
            <p className='leading-[27px] text-[#5E6282] my-7'>
              Built Wicket longer admire do barton vanity itself do in it. Preferred to <br /> sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className='flex gap-11'>
              <Link href="/" className='text-lg py-4 px-6 rounded-lg bg-[#F1A501] hover:bg-[#f1a501e0] text-white shadow-xl shadow-[#F1A501]/40'>Find out more</Link>
              <button type="button" className='flex items-center gap-5'>
                <div className='rounded-full w-12 h-12 bg-[#DF6951] hover:bg-[#be5a46] shadow-xl shadow-[#DF6951]/40 flex items-center justify-center'>
                  <Image src={play} alt="Play icon" />
                </div>
                <span className='text-[#686D77] font-medium text-lg'>Play Demo</span>
              </button>
            </div>
          </div>
        </div>
        <Image src={traveller} alt="decore" className='hidden md:block h-[615px] w-auto' />
      </div>
    </div>
  )
}

export default Header