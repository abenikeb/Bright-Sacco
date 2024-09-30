import Footer from '@/components/footer/Footer'
import Blog from '@/components/home-2/Blog'
import CoreFeature from '@/components/home-2/CoreFeature'
import Hero from '@/components/home-1/Hero'
import Rating from '@/components/home-2/Rating'
import WhyUs from '@/components/home-2/WhyUs'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import Clients from '@/components/shared/Clients'
import MembersCounter from '@/components/shared/MembersCounter'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import Pricing from '@/components/shared/Pricing'
import { PaymentFeaturesData } from '@/data/data'
import HeroContent from '@/components/home-1/HeroContent'
import Services from '@/components/shared/Services'
import Vision from '@/components/home-1/Vision'
import Integration from '@/components/home-1/Integration'
import Faq from '@/components/home-1/Faq'
import Testimonial from '@/components/shared/Testimonial'
import FinancialBlog from '@/components/shared/FinancialBlog'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'

export const metadata = {
  title: 'Payment',
}

const HomePage2 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Clients/>
        <Services/>
        <Vision/>
        <Integration/>
        <Faq/>
        <Testimonial/>
        <FinancialBlog/>
      </main>
      <Footer />
    </>
  )
}

export default HomePage2
