import { FaLaptop, FaFlask, FaFutbol } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import heroImg from '../assets/images/hero.jpg'
import earlyYearsImg from '../assets/images/creche.jpg'
import classroomImg from '../assets/images/about.JPG'
import libraryImg from '../assets/images/primary.jpg'

// ---- Edit the facilities here ----
// Add an `image` when you have a photo; until then the `icon` is shown on a navy tile.
const facilities = [
  {
    title: 'Early Years rooms',
    text: 'Bright, colourful spaces designed for play, discovery and our youngest learners.',
    image: earlyYearsImg,
  },
  {
    title: 'Modern classrooms',
    text: 'Air-conditioned classrooms with interactive boards and flexible seating.',
    image: classroomImg,
  },
  {
    title: 'Library',
    text: 'A calm, inviting space to read, research and study, with a reading corner for little ones.',
    image: libraryImg,
  },
  {
    title: 'ICT Centre',
    text: 'Modern computers, coding and robotics kits, and fast, filtered internet.',
    icon: FaLaptop,
  },
  {
    title: 'Science labs',
    text: 'Equipped labs for biology, chemistry and physics, plus a discovery room for younger pupils.',
    icon: FaFlask,
  },
  {
    title: 'Sports facilities',
    text: 'Space to run, play and compete, with a sports field, running track and court.',
    icon: FaFutbol,
  },
]

export default function Facilities() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <PageHero
        title="Our facilities"
        intro="Spaces designed to help children learn, create, play and grow."
        image={heroImg}
        position="center 45%"
      />

      {/* ---------- Intro: heading left, text right ---------- */}
      <section aria-labelledby="facilities-intro-title" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 xl:px-10">
          <h2
            id="facilities-intro-title"
            className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
          >
            A campus built for curious minds
          </h2>
          <div>
            <p className="text-[17px] font-light text-muted md:text-lg">
              Every space at Marvelous Light Schools is designed with children in mind, from bright,
              playful Early Years rooms to well-equipped labs and a calm, inviting library.
            </p>
            <p className="mt-5 text-[17px] font-light text-muted md:text-lg">
              Our campus is safe, secure and comfortable, giving children room to discover what they love,
              in the classroom and beyond it.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Facilities grid: photo tiles with text on them ---------- */}
      <section aria-labelledby="facilities-title" className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2 id="facilities-title" className="sr-only">Our facilities</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ title, text, image, icon: Icon }) => (
              <article
                key={title}
                className="group relative flex h-[340px] items-end overflow-hidden rounded-md bg-ml-navy md:h-[400px]"
              >
                {/* Photo, or a large faint icon if there's no photo yet */}
                {image ? (
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <Icon
                    className="absolute left-1/2 top-[38%] size-24 -translate-x-1/2 -translate-y-1/2 text-white/15"
                    aria-hidden="true"
                  />
                )}

                {/* Dark fade at the bottom so the text is readable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ml-navy/95 via-ml-navy/40 to-transparent"
                />

                {/* Text */}
                <div className="relative p-7">
                  <span className="mb-4 block h-[3px] w-8 rounded-full bg-ml-orange" aria-hidden="true" />
                  <h3 className="text-[21px] font-semibold tracking-[-0.01em] text-white">{title}</h3>
                  <p className="mt-2 text-[15px] font-light text-white/80">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}