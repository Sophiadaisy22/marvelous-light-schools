import PageHero from '../components/PageHero.jsx'
import ethosImg from '../assets/images/nurserykg.jpg'

export default function Ethos() {
  return (
    <>
      <PageHero
        title="Our ethos"
        intro="Our ethos brings together academic ambition and personal growth, so children leave us ready for whatever comes next."
        image={ethosImg}
        alt="Children learning together"
        position="center 40%"
      />
    </>
  )
}