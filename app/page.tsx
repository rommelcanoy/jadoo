import Destinations from '@/components/destinations/Destinations'
import Footer from '@/components/Footer'
import Categories from '../components/categories/Categories'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Destinations />
      <Footer />
    </div>
  )
}
