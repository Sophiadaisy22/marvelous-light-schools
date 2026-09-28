import PageHero from '../components/PageHero.jsx'
import valuesImg from '../assets/images/secondary.jpg'

export default function Values() {
  return (
    <>
      <PageHero
        title="Our values"
        intro="Six values shape how we teach, how we behave and how we treat one another, in the classroom and beyond."
        image={valuesImg}
        alt="Our students"
        position="center 30%"
      />
    </>
  )
}