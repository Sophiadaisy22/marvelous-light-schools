import {
  FaHeart,
  FaHandshake,
  FaUsers,
  FaBalanceScale,
  FaSeedling,
  FaBullseye,
  FaMountain,
} from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import valuesImg from '../assets/images/secondary.jpg'
import characterImg from '../assets/images/primary.jpg'

// ---- Edit the core values here ----
const values = [
  { icon: FaHeart, title: 'Love', text: 'A caring, secure foundation where every child feels they belong.' },
  { icon: FaHandshake, title: 'Respect', text: 'Honouring the worth and differences of every person in our community.' },
  { icon: FaUsers, title: 'Tolerance', text: 'Growing empathy and an open mind towards other people and ideas.' },
  { icon: FaBalanceScale, title: 'Integrity', text: 'Being honest, keeping our word and owning our actions.' },
  { icon: FaSeedling, title: 'Humility', text: 'Staying teachable, and learning from others with an open heart.' },
  { icon: FaBullseye, title: 'Discipline', text: 'Building the focus and good habits that lead to excellence.' },
  { icon: FaMountain, title: 'Resilience', text: 'Finding the inner strength to keep going when things get hard.' },
]

export default function Values() {
  return (
    <>
      {/* ---------- Header (shared component) ---------- */}
      <PageHero
        title="Our values"
        intro="The principles that guide how we teach, how we behave and how we treat one another."
        image={valuesImg}
        position="center 30%"
      />

      {/* ---------- Intro: picture left, text right ---------- */}
      <section aria-labelledby="character-title" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 xl:px-10">
          {/* Left: picture */}
          <div className="relative h-[300px] overflow-hidden rounded-md bg-soft md:h-[460px]">
            <img
              src={characterImg}
              alt="Students exploring a globe together"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          {/* Right: text */}
          <div>
            <h2
              id="character-title"
              className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
            >
              Building character through purpose
            </h2>
            <p className="mt-6 text-[17px] font-light text-muted md:text-lg">
              At Marvelous Light Schools, we believe real education reaches far beyond the classroom. We aim
              to raise young people who excel academically and grow into well-rounded individuals, confident
              and adaptable enough to succeed in a fast-changing world.
            </p>
            <p className="mt-5 text-[17px] font-light text-muted md:text-lg">
              Our school is a welcoming, lively place where every child is encouraged to reach higher. By
              widening their horizons and giving them a global outlook, we spark a lifelong love of learning
              and prepare them to become thoughtful, responsible citizens of the world.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Core values ---------- */}
      <section aria-labelledby="values-title" className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2
            id="values-title"
            className="text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
          >
            Our core values
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-[52ch] text-center text-[17px] font-light text-muted md:mb-14">
            Principles that shape our community
          </p>

          {/* 7 cards: rows of 4, the last row centred */}
          <div className="flex flex-wrap justify-center gap-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="w-full rounded-md border border-hair bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <Icon className="mb-6 size-9 text-ml-blue" aria-hidden="true" />
                <h3 className="mb-2.5 text-[19px] font-semibold tracking-[-0.01em] text-ml-blue">{title}</h3>
                <p className="text-[15px] font-light text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- The Marvelous Light promise ---------- */}
      <section aria-labelledby="promise-title" className="bg-ml-navy py-20 text-white md:py-28">
        <div className="mx-auto max-w-[860px] px-5 text-center md:px-8">
          <span className="mx-auto mb-6 block h-[3px] w-10 rounded-full bg-ml-orange" aria-hidden="true" />
          <h2 id="promise-title" className="text-sm font-semibold uppercase tracking-[0.12em] text-ml-yellow">
            The Marvelous Light promise
          </h2>
          <p className="mt-5 text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.4] tracking-[-0.01em]">
            We give every child the care and encouragement they need to grow into confident, capable leaders,
            ready to shape the future.
          </p>
        </div>
      </section>

      {/* ---------- Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}