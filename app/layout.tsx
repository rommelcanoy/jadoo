import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jadoo',
  description: 'Jadoo travel page using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`max-w-7xl mx-auto ${poppins.className} font-medium text-[#5E6282]`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
