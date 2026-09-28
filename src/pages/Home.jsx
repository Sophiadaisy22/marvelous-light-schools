import Hero from '../components/Hero.jsx'
import Welcome from '../components/Welcome.jsx'
import Program from '../components/Program.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Impact from '../components/Impact.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Program/>
      <WhyChooseUs />
      <Testimonials />
      <Impact />
      <AdmissionsBanner />
    </>
  )
}