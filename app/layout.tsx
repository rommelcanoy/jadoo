import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import TopNav from './TopNav'
const open_sans = Open_Sans({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] })

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
      <body className={`max-w-7xl mx-auto ${open_sans.className} font-medium`}>
        <div>
          <TopNav />
        </div>
        {children}
      </body>
    </html>
  )
}
