import Destinations from '@/components/destinations/Destinations'
import StepsGuide from '@/components/StepsGuide'
import SubscriptionForm from '@/components/SubscriptionForm'
import Categories from '../components/categories/Categories'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Destinations />
      <StepsGuide />
      <SubscriptionForm />
    </div>
  )
}
