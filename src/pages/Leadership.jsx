import PageHero from '../components/PageHero.jsx'
import leadershipImg from '../assets/images/about.JPG'

export default function Leadership() {
  return (
    <>
      <PageHero
        title="Leadership & management"
        intro="Our leaders and teachers bring experience, expertise and a shared commitment to every child's success."
        image={leadershipImg}
        alt="Teacher with her class"
        position="center 30%"
      />
    </>
  )
}