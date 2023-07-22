import Destinations from '@/components/destinations/Destinations'
import Categories from '../components/categories/Categories'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Destinations />
    </div>
  )
}
