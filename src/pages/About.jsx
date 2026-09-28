import { FaBookOpen, FaUserFriends, FaHandsHelping } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import heroImg from '../assets/images/hero.jpg'
import storyImg from '../assets/images/nurserykg.jpg'

// ---- Edit the approach cards here ----
const approach = [
  {
    icon: FaBookOpen,
    title: 'Rigorous and balanced',
    text: 'We blend the Nigerian and British curricula, pairing strong literacy and numeracy with science, technology, the arts and sport.',
  },
  {
    icon: FaUserFriends,
    title: 'Personal attention',
    text: "Small classes and close progress tracking mean every child is known, stretched and supported at their own pace.",
  },
  {
    icon: FaHandsHelping,
    title: 'Partnership with parents',
    text: 'Regular reports, open-door meetings and an active parents’ forum keep families involved at every stage.',
  },
]

export default function About() {
  return (
    <>
      {/* ---------- 1. Page hero ---------- */}
      <PageHero
        title="About us"
        intro="Marvelous Light Schools is a premium school from Early Years to Senior Secondary in Lagos, built on academic excellence, strong character and a genuine partnership with families."
        image={heroImg}
        alt="Our campus walkway and playground"
        position="center 45%"
      />

      {/* ---------- 2. Our story ---------- */}
      <section aria-labelledby="story-title" className="bg-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 xl:px-10">
          <div className="relative h-[300px] overflow-hidden rounded-md bg-white md:h-[460px]">
            <img
              src={storyImg}
              alt="Early years children learning together"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div>
            <h2
              id="story-title"
              className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
            >
              Our story
            </h2>
            <p className="mt-6 text-[17px] font-light text-muted">
              Marvelous Light began as a small nursery with a big idea: that children learn best when they
              feel safe, seen and challenged. As our first pupils grew, so did we, adding Primary, then
              Junior and Senior Secondary.
            </p>
            <p className="mt-5 text-[17px] font-light text-muted">
              Today we welcome families from across Lagos, while keeping the warmth and personal attention
              that made us who we are.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 3. Mission & vision ---------- */}
      <section aria-label="Mission and vision" className="bg-ml-navy py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-0 xl:px-10">
          <div className="lg:pr-16">
            <span className="mx-auto mb-5 block h-[3px] w-10 rounded-full bg-ml-orange lg:mx-0" aria-hidden="true" />
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-ml-yellow lg:text-left">
              Our mission
            </h2>
            <p className="mt-4 text-center text-[clamp(20px,2vw,26px)] leading-[1.45] lg:text-left">
              To provide a world-class education that develops bright minds, strong character and the
              confidence to lead, in a caring and inclusive environment.
            </p>
          </div>
          <div className="border-t border-white/15 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <span className="mx-auto mb-5 block h-[3px] w-10 rounded-full bg-ml-orange lg:mx-0" aria-hidden="true" />
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-ml-yellow lg:text-left">
              Our vision
            </h2>
            <p className="mt-4 text-center text-[clamp(20px,2vw,26px)] leading-[1.45] lg:text-left">
              To raise a generation of curious, compassionate and capable leaders who shape a better
              Nigeria and a better world.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 4. Our approach ---------- */}
      <section aria-labelledby="approach-title" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2
            id="approach-title"
            className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-14"
          >
            Our approach
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-md border border-hair bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift"
              >
                <Icon className="mb-6 size-9 text-ml-blue" aria-hidden="true" />
                <h3 className="mb-2.5 text-[19px] font-semibold tracking-[-0.01em] text-ml-blue">{title}</h3>
                <p className="text-[15px] font-light text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}