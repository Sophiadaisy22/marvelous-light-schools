import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import ethosImg from '../assets/images/nurserykg.jpg'
import curiousImg from '../assets/images/primary.jpg'
import confidentImg from '../assets/images/nursery.jpg'
import responsibleImg from '../assets/images/about.JPG'
import leadersImg from '../assets/images/secondary.jpg'

// ---- Edit the pillars here ----
const pillars = [
  {
    title: 'Curious learners',
    text: 'Children ask questions, explore and enjoy finding answers for themselves. We give them the time, tools and encouragement to follow their curiosity in every subject.',
    image: curiousImg,
    alt: 'Students exploring a globe together',
  },
  {
    title: 'Confident individuals',
    text: 'Every voice is heard and every talent has a stage, from class presentations to assemblies, competitions and performances.',
    image: confidentImg,
    alt: 'Pupil confidently raising his hand in class',
    position: 'center 25%',
  },
  {
    title: 'Responsible citizens',
    text: 'Children learn to care for one another, for their community and for the world around them, through everyday kindness and community projects.',
    image: responsibleImg,
    alt: 'Teacher and pupils in an engaged class discussion',
  },
  {
    title: 'Future leaders',
    text: 'Real responsibility at every age, from class monitors and prefects to head students, so leadership becomes second nature.',
    image: leadersImg,
    alt: 'Senior students together',
    position: 'center 30%',
  },
]

const highlights = [
  'Hands-on projects in every subject',
  'Over 30 clubs, sports and societies',
  'Trips and excursions every term',
]

export default function Ethos() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <PageHero
        title="Our ethos"
        intro="Academic ambition and personal growth, side by side."
        image={ethosImg}
        position="center 40%"
      />

      {/* ---------- Intro: one bold centred statement ---------- */}
      <section aria-label="Our ethos in a sentence" className="py-20 md:py-32">
        <div className="mx-auto max-w-[1000px] px-5 text-center md:px-8">
          <p className="text-[clamp(26px,3.4vw,44px)] font-semibold leading-[1.25] tracking-[-0.03em] text-ml-blue">
            We want our children to be as kind as they are clever,{' '}
            <span className="font-light text-ml-blue-400">and as brave as they are bright.</span>
          </p>
        </div>
      </section>

      {/* ---------- Four pillars: zig-zag photo + text rows ---------- */}
      <section aria-labelledby="pillars-title" className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2
            id="pillars-title"
            className="mb-12 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-20"
          >
            Our four pillars
          </h2>

          <div className="grid gap-16 md:gap-24">
            {pillars.map((p, i) => (
              <article key={p.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
                {/* Photo: left on odd rows, right on even rows */}
                <div
                  className={`relative h-[280px] overflow-hidden rounded-md bg-soft md:h-[420px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                    style={{ objectPosition: p.position ?? 'center' }}
                  />
                </div>

                {/* Text */}
                <div>
                  <span className="block text-[clamp(44px,5vw,72px)] font-bold leading-none tracking-[-0.04em] text-ml-orange">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-ml-blue">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-[17px] font-light text-muted">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Learning through work and play ---------- */}
      <section aria-labelledby="play-title" className="bg-ml-blue-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 xl:px-10">
          <div>
            <h2
              id="play-title"
              className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
            >
              Learning through work and play
            </h2>
            <p className="mt-6 text-[17px] font-light text-muted md:text-lg">
              Children learn best when they are engaged. Focused lessons sit alongside play, projects, clubs
              and trips that bring learning to life, from messy play in Early Years to science fairs and
              debates in Secondary.
            </p>
          </div>

          <ul className="grid gap-4">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-4 rounded-md border border-ml-blue-100 bg-white px-6 py-5 text-[17px] font-medium text-ml-blue"
              >
                <span className="h-[3px] w-6 flex-none rounded-full bg-ml-orange" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}