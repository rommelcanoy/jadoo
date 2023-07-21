import Image from 'next/image'
import Categories from '../components/categories/Categories'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
    </div>
  )
}
