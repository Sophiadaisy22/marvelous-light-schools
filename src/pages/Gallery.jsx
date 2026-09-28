import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import AdmissionsBanner from '../components/AdmissionsBanner.jsx'
import heroImg from '../assets/images/hero.jpg'
import schoolHeroImg from '../assets/images/schoolHero.jpg'
import classroomImg from '../assets/images/about.JPG'
import crecheImg from '../assets/images/creche.jpg'
import nurseryKgImg from '../assets/images/nurserykg.jpg'
import primaryImg from '../assets/images/nursery.jpg'
import jssImg from '../assets/images/primary.jpg'
import sssImg from '../assets/images/secondary.jpg'

// ---- Edit the photos here ----
// cat: which filter it belongs to. h: tile height in the grid.
// To add a photo: import it above, then add a line here.
const photos = [
  { src: classroomImg, alt: 'Teacher leading an engaged class', cat: 'Classrooms', h: 'h-[320px]' },
  { src: schoolHeroImg, alt: 'Smiling pupil in class', cat: 'Students', h: 'h-[260px]', position: '72% 35%' },
  { src: heroImg, alt: 'Campus walkway and playground', cat: 'Campus', h: 'h-[300px]' },
  { src: nurseryKgImg, alt: 'Early years children learning to count', cat: 'Students', h: 'h-[340px]' },
  { src: crecheImg, alt: 'Bright, colourful early years classroom', cat: 'Classrooms', h: 'h-[260px]' },
  { src: jssImg, alt: 'Students exploring a globe together', cat: 'Students', h: 'h-[280px]' },
  { src: primaryImg, alt: 'Pupil raising his hand in class', cat: 'Classrooms', h: 'h-[340px]', position: 'center 25%' },
  { src: sssImg, alt: 'Senior students in uniform', cat: 'Students', h: 'h-[300px]', position: 'center top' },
]

const categories = ['All', ...new Set(photos.map((p) => p.cat))]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [openIndex, setOpenIndex] = useState(null) // which photo is open in the viewer (null = closed)

  const shown = filter === 'All' ? photos : photos.filter((p) => p.cat === filter)
  const current = openIndex !== null ? shown[openIndex] : null

  const close = () => setOpenIndex(null)
  const next = () => setOpenIndex((i) => (i + 1) % shown.length)
  const prev = () => setOpenIndex((i) => (i - 1 + shown.length) % shown.length)

  // While the viewer is open: keyboard controls + stop the page scrolling behind it
  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % shown.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + shown.length) % shown.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, shown.length])

  return (
    <>
      {/* ---------- Header ---------- */}
      <PageHero
        title="Gallery"
        intro="A look inside our classrooms, clubs and everyday school life."
        image={heroImg}
        position="center 45%"
      />

      {/* ---------- Filters + photos ---------- */}
      <section aria-labelledby="gallery-title" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2 id="gallery-title" className="sr-only">Photo gallery</h2>

          {/* Filter buttons */}
          <div role="group" aria-label="Filter photos" className="mb-10 flex flex-wrap justify-center gap-2.5 md:mb-14">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`min-h-11 rounded-md border px-5 text-[15px] font-medium transition-colors ${
                  filter === c
                    ? 'border-ml-navy bg-ml-navy text-white'
                    : 'border-line bg-white text-ml-blue hover:border-ml-blue'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid: 2 columns on phones, 3 on tablets, 4 on large screens */}
          <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
            {shown.map((p, i) => (
              <button
                key={p.alt}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${p.alt}`}
                className={`group relative mb-3 block w-full overflow-hidden rounded-md bg-soft md:mb-5 ${p.h} break-inside-avoid`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: p.position ?? 'center' }}
                />
                {/* Soft dark fade + caption on hover */}
                <span className="absolute inset-0 bg-gradient-to-t from-ml-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.alt}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Full-screen viewer (lightbox) ---------- */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ml-navy/95 p-4 md:p-10"
        >
          {/* Photo (clicking the photo itself doesn't close the viewer) */}
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-5xl flex-col items-center">
            <img src={current.src} alt={current.alt} className="max-h-[78vh] w-auto rounded-md object-contain" />
            <figcaption className="mt-4 text-center text-[15px] text-white/80">
              {current.alt} <span className="text-white/50">· {openIndex + 1} of {shown.length}</span>
            </figcaption>
          </figure>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 grid size-12 place-items-center text-white transition-colors hover:text-ml-yellow md:right-8 md:top-8"
          >
            <FaTimes className="size-6" />
          </button>

          {/* Previous / next (only if there's more than one photo) */}
          {shown.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center text-white transition-colors hover:text-ml-yellow md:left-6"
              >
                <FaChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center text-white transition-colors hover:text-ml-yellow md:right-6"
              >
                <FaChevronRight className="size-7" />
              </button>
            </>
          )}
        </div>
      )}

      {/* ---------- Admissions banner (reused) ---------- */}
      <AdmissionsBanner />
    </>
  )
}