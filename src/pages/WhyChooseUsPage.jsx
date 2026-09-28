import PageHero from '../components/PageHero.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import whyImg from '../assets/images/schoolHero.jpg'

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why choose us"
        intro="Parents choose us for our results, our values and the way we care for every child. Here is what makes us different."
        image={whyImg}
        alt="Smiling pupil"
        position="center 35%"
      />
      {/* Reuses the cards from the homepage */}
      <WhyChooseUs />
    </>
  )
}