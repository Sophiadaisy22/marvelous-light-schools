import { Link } from 'react-router-dom'
import earlyYearsImg from '../assets/images/nurserykg.jpg'
import primaryImg from '../assets/images/nursery.jpg' // boy raising hand, fits Primary age
import jssImg from '../assets/images/primary.jpg' // pupils in blazers with globe, fits JSS age
import sssImg from '../assets/images/secondary.jpg'

// ---- Edit the stages here ----
const stages = [
  {
    title: 'Early Years',
    classes: 'Creche, Nursery & KG',
    text: 'A warm, playful start with early reading, numbers and friendship.',
    image: earlyYearsImg,
    alt: 'Early years children learning to count',
    dot: 'bg-ml-yellow',
  },
  {
    title: 'Primary School',
    classes: 'Primary 1 – 6',
    text: 'Strong foundations in literacy, maths, science and the arts.',
    image: primaryImg,
    alt: 'Primary pupil raising his hand in class',
    dot: 'bg-ml-green',
    position: 'center 25%',
  },
  {
    title: 'Junior Secondary',
    classes: 'JSS 1 – 3',
    text: 'Broad subjects, hands-on projects and growing independence.',
    image: jssImg,
    alt: 'Junior secondary students exploring a globe',
    dot: 'bg-ml-sky',
  },
  {
    title: 'Senior Secondary',
    classes: 'SS 1 – 3',
    text: 'WAEC, IGCSE and university guidance for the next big step.',
    image: sssImg,
    alt: 'Senior students in uniform',
    dot: 'bg-ml-orange',
    position: 'center top',
    hideBottom: true, // trims the "Meta AI" watermark at the bottom of this photo
  },
]

export default function Programs() {
  return (
    <section aria-labelledby="programs-title" className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* ---------- Header ---------- */}
        <h2
          id="programs-title"
          className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-14"
        >
          Enroll in our programs
        </h2>

        {/* ---------- Cards ---------- */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <Link
              key={s.title}
              to="/programs"
              className="group flex flex-col overflow-hidden rounded-md border border-hair bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift"
            >
              {/* Photo */}
              <div className="relative h-[230px] overflow-hidden bg-soft">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  style={{ objectPosition: s.position ?? 'center' }}
                  className={`absolute inset-x-0 top-0 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${s.hideBottom ? 'h-[112%]' : 'h-full'}`}
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-2.5 p-6 pb-7">
                <span className="flex items-center gap-2.5 text-[13px] font-medium text-muted">
                  <span className={`size-2 rounded-full ${s.dot}`} aria-hidden="true" />
                  {s.classes}
                </span>
                <h3 className="text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ml-blue">{s.title}</h3>
                <p className="text-[14.5px] font-light leading-relaxed text-muted">{s.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-2.5 text-sm font-medium text-ml-blue transition-[gap] duration-200 group-hover:gap-3">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}