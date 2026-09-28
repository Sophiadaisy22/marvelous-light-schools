import PageHero from '../components/PageHero.jsx'
import facilitiesImg from '../assets/images/creche.jpg'

export default function Facilities() {
  return (
    <>
      <PageHero
        title="Our facilities"
        intro="Every space on our campus is designed to help children learn, create, play and grow in safety and comfort."
        image={facilitiesImg}
        alt="A bright, modern classroom"
      />
    </>
  )
}