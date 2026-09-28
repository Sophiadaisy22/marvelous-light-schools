import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCamera } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import heroImg from '../assets/images/about.JPG'
import nurseryKgImg from '../assets/images/nurserykg.jpg'
import crecheImg from '../assets/images/creche.jpg'
import primaryImg from '../assets/images/nursery.jpg'
import classroomImg from '../assets/images/about.JPG'
import jssImg from '../assets/images/primary.jpg'
import sssImg from '../assets/images/secondary.jpg'

// How many photo slots each stage shows under the main photo
const PHOTO_SLOTS = 4

// ---- Edit the stages here ----
// classList: each class in the stage. `note` is optional.
// photos: add more (up to PHOTO_SLOTS). Empty slots show a dashed placeholder.
const stages = [
  {
    title: 'Early Years',
    classes: 'Creche, KG & Nursery',
    dot: 'bg-ml-yellow',
    classList: [
      { name: 'Creche', note: 'Care, routine and sensory play' },
      { name: 'KG', note: 'First steps in letters and numbers' },
      { name: 'Nursery 1', note: 'Early reading and counting' },
      { name: 'Nursery 2', note: 'Getting ready for Primary' },
    ],
    photos: [
      { src: nurseryKgImg, alt: 'Early years children learning to count' },
      { src: crecheImg, alt: 'Bright, colourful early years classroom' },
    ],
    text: 'A warm, home-like start where our youngest learners feel safe, loved and free to explore. Through play, songs and hands-on activities, children build early reading, numbers, confidence and friendships.',
    areas: ['Phonics and early reading', 'Early numeracy', 'Language and communication', 'Creative arts', 'Social skills', 'Outdoor play'],
  },
  {
    title: 'Primary School',
    classes: 'Primary 1 – 5',
    dot: 'bg-ml-green',
    classList: [
      { name: 'Primary 1' },
      { name: 'Primary 2' },
      { name: 'Primary 3' },
      { name: 'Primary 4' },
      { name: 'Primary 5' },
    ],
    photos: [
      { src: primaryImg, alt: 'Primary pupil raising his hand in class', position: 'center 25%' },
      { src: classroomImg, alt: 'Primary teacher leading an engaged class' },
    ],
    text: 'Strong foundations across the curriculum, with growing independence. Pupils develop confident reading, writing and maths, alongside science, technology, languages and the arts.',
    areas: ['English and literacy', 'Mathematics', 'Basic science and technology', 'Nigerian languages and French', 'ICT and coding', 'Music, art and PE'],
  },
  {
    title: 'Junior Secondary',
    classes: 'JSS 1 – 3',
    dot: 'bg-ml-sky',
    classList: [{ name: 'JSS 1' }, { name: 'JSS 2' }, { name: 'JSS 3' }],
    photos: [{ src: jssImg, alt: 'Junior secondary students exploring a globe' }],
    text: 'A broad curriculum, hands-on projects and strong study habits that prepare students for senior school and the BECE, while building leadership and independence.',
    areas: ['English and mathematics', 'Basic science and technology', 'Business studies', 'Social and civic studies', 'ICT', 'Creative arts'],
  },
  {
    title: 'Senior Secondary',
    classes: 'SS 1 – 3',
    dot: 'bg-ml-orange',
    classList: [{ name: 'SS 1' }, { name: 'SS 2' }, { name: 'SS 3' }],
    photos: [
      // hideBottom trims the watermark at the bottom of this photo
      { src: sssImg, alt: 'Senior students in uniform', position: 'center top', hideBottom: true },
    ],
    text: 'Science, arts and commercial pathways with expert preparation for WAEC, IGCSE and university, plus careers guidance to help every student plan their next step.',
    areas: ['Science pathway', 'Arts and humanities pathway', 'Commercial pathway', 'WAEC and IGCSE preparation', 'University and career guidance'],
  },
]

// A photo that fills its box without stretching
function Photo({ photo, className = '' }) {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      className={`absolute inset-x-0 top-0 w-full object-cover ${photo.hideBottom ? 'h-[112%]' : 'h-full'} ${className}`}
      style={{ objectPosition: photo.position ?? 'center' }}
    />
  )
}

export default function Programs() {
  const [active, setActive] = useState(0) // which stage tab is open
  const [photoIndex, setPhotoIndex] = useState(0) // which photo is shown large
  const stage = stages[active]
  const mainPhoto = stage.photos[photoIndex] ?? stage.photos[0]

  // Switching stage also resets to that stage's first photo
  function selectStage(i) {
    setActive(i)
    setPhotoIndex(0)
  }

  // Left/right arrow keys move between tabs (keyboard accessibility)
  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') selectStage((active + 1) % stages.length)
    if (e.key === 'ArrowLeft') selectStage((active - 1 + stages.length) % stages.length)
  }

  return (
    <>
      {/* ---------- Header ---------- */}
      <PageHero
        title="Our programs"
        intro="From Early Years to Senior Secondary, one connected journey."
        image={heroImg}
        position="center 30%"
      />

      {/* ---------- Intro + tabs ---------- */}
      <section aria-labelledby="programs-intro-title" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2
            id="programs-intro-title"
            className="text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
          >
            Four stages, one journey
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-[56ch] text-center text-[17px] font-light text-muted md:mb-14">
            Each stage builds on the last, so your child moves forward with confidence. Choose a stage to
            learn more.
          </p>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="School stages"
            onKeyDown={handleKeyDown}
            className="mx-auto mb-10 flex max-w-max gap-2 overflow-x-auto rounded-md border border-hair bg-soft p-1.5 md:mb-14"
          >
            {stages.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="stage-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => selectStage(i)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-md px-5 py-3 text-[15px] font-medium transition-colors ${
                  active === i ? 'bg-ml-navy text-white' : 'text-ml-blue hover:bg-white'
                }`}
              >
                <span className={`size-2 rounded-full ${s.dot}`} aria-hidden="true" />
                {s.title}
              </button>
            ))}
          </div>

          {/* Panel for the selected stage */}
          <div
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* ---------- Photo gallery ---------- */}
            <div>
              <div className="relative h-[300px] overflow-hidden rounded-md bg-soft md:h-[440px]">
                <Photo key={mainPhoto.src + photoIndex} photo={mainPhoto} />
              </div>

              <div className="mt-3 grid grid-cols-4 gap-3">
                {Array.from({ length: PHOTO_SLOTS }).map((_, i) => {
                  const photo = stage.photos[i]

                  if (!photo) {
                    return (
                      <div
                        key={`empty-${i}`}
                        aria-hidden="true"
                        className="grid aspect-[4/3] place-items-center rounded-md border-2 border-dashed border-ml-blue-100 bg-ml-blue-50"
                      >
                        <FaCamera className="size-5 text-ml-blue-200" />
                      </div>
                    )
                  }

                  const selected = i === photoIndex
                  return (
                    <button
                      key={`${stage.title}-${i}`}
                      type="button"
                      onClick={() => setPhotoIndex(i)}
                      aria-label={`Show photo ${i + 1}: ${photo.alt}`}
                      aria-pressed={selected}
                      className={`relative aspect-[4/3] overflow-hidden rounded-md bg-soft transition-all ${
                        selected ? 'ring-2 ring-ml-orange ring-offset-2' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Photo photo={photo} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ---------- Details ---------- */}
            <div>
              {/* Stage line with its coloured dot */}
              <span className="flex items-center gap-2.5 text-sm font-medium text-muted">
                <span className={`size-2.5 rounded-full ${stage.dot}`} aria-hidden="true" />
                {stage.classes}
              </span>
              <h3 className="mt-3 text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.02em] text-ml-blue">
                {stage.title}
              </h3>
              <p className="mt-4 text-[17px] font-light text-muted">{stage.text}</p>

              {/* Classes in this stage (no dots) */}
              <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-ml-blue">
                Classes
              </h4>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {stage.classList.map((c) => (
                  <li key={c.name} className="rounded-md border border-ml-blue-100 bg-ml-blue-50 px-4 py-3">
                    <span className="block text-[15px] font-semibold text-ml-blue">{c.name}</span>
                    {c.note && <span className="mt-1 block text-[13px] leading-snug text-muted">{c.note}</span>}
                  </li>
                ))}
              </ul>

              {/* Key learning areas */}
              <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-ml-blue">
                Key learning areas
              </h4>
              <ul className="flex flex-wrap gap-2">
                {stage.areas.map((a) => (
                  <li key={a} className="rounded-md border border-ml-blue-100 bg-white px-3.5 py-2 text-sm text-ink">
                    {a}
                  </li>
                ))}
              </ul>

              <Link
                to="/admissions"
                className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-navy px-7 text-[15px] font-medium text-white transition-colors hover:bg-ml-blue"
              >
                Apply for {stage.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}