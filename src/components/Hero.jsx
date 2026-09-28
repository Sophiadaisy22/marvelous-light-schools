import { Link } from 'react-router-dom'
import { FaSchool, FaGraduationCap, FaLaptopCode, FaBookReader, FaBasketballBall, FaGlobeAfrica } from 'react-icons/fa'
import heroImage from '../assets/images/schoolHero.jpg'

// ---- Edit the slider items here ----
const highlights = [
  { icon: FaSchool, label: 'Primary School' },
  { icon: FaGraduationCap, label: 'Secondary School' },
  { icon: FaLaptopCode, label: 'STEM Education' },
  { icon: FaBookReader, label: 'Modern Learning' },
  { icon: FaBasketballBall, label: 'Sports & Clubs' },
  { icon: FaGlobeAfrica, label: 'Global Opportunities' },
]

const credentials = [
  { title: 'Creche to SS 3', text: 'One connected school' },
  { title: 'Blended curriculum', text: 'Nigerian and British' },
  { title: 'Small classes', text: 'Every child known by name' },
]

export default function Hero() {
  return (
    // One screen tall on desktop: full height minus the 84px navbar
    <section aria-labelledby="hero-title" className="flex flex-col !pt-0 lg:min-h-[calc(100svh-84px)]">
      {/* Content grows to fill the space above the slider, centred vertically */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 items-start px-5 md:px-8 xl:px-10">
        <div className="grid w-full items-start gap-12 pt-6 pb-10 lg:grid-cols-2 lg:gap-20 lg:pt-8 lg:pb-8">
          {/* ---------- Left: text ---------- */}
          <div>
            
            <h1
              id="hero-title"
              className=" max-w-[15ch] mb-6 text-[clamp(40px,min(5.6vw,8svh),76px)] font-bold leading-[1.02] tracking-[-0.045em] text-ml-blue mt-10"
            >
              Building bright minds, shaping future leaders
            </h1>

            <p className="max-w-[46ch] text-[18px] font-light leading-[1.7] text-muted">
                         A warm, ambitious school in Ota, Ogun State, where children from Creche to Senior Secondary
              learn to think deeply, act kindly and lead with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-blue px-7 text-[15px] font-medium text-white transition-colors hover:bg-ml-blue-deep"
              >
                Enroll now
              </Link>
              <Link
                to="/programs"
                className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-line bg-white px-7 text-[15px] font-medium text-ml-blue transition-colors hover:border-ml-blue"
              >
                Explore our programs
              </Link>
            </div>

            {/* Hidden on short screens (e.g. small laptops) so the slider still fits */}
            <dl className="mt-8 flex flex-col gap-3.5 border-t border-hair pt-6 sm:flex-row sm:gap-0 [@media(max-height:780px)]:lg:hidden">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="sm:mr-6 sm:border-r sm:border-hair sm:pr-6 sm:last:mr-0 sm:last:border-0 sm:last:pr-0"
                >
                  <dt className="text-[15px] font-semibold text-ml-blue">{c.title}</dt>
                  <dd className="text-[13.5px] text-muted">{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------- Right: photo ---------- */}
          <div className="relative pb-6 pl-6 md:pb-8 md:pl-8">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[70%] w-[62%] rounded-md border border-ml-yellow"
            />
            {/* Height follows the screen height on desktop (between 340px and 600px) */}
            <div className="relative h-[380px] overflow-hidden rounded-md bg-soft lg:h-[clamp(340px,calc(100svh-340px),600px)]">
              <img
                src={heroImage}
                alt="Smiling pupil in class"
                className="absolute inset-0 size-full object-cover"
                style={{ objectPosition: '72% 35%' }}
              />
            </div>
            <div className="absolute bottom-10 left-0 z-10 flex max-w-[280px] items-center gap-3.5 rounded-md bg-white px-5 py-4 text-[13.5px] leading-snug shadow-lift md:bottom-14">
              <span className="grid size-[42px] flex-none place-items-center rounded-md bg-ml-blue text-ml-yellow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                  <path d="M2 9l10-5 10 5-10 5z" />
                  <path d="M6 11v5c3 2 9 2 12 0v-5" />
                  <path d="M22 9v5" />
                </svg>
              </span>
              <span>
                <b className="block text-[15px] font-semibold text-ink">Excellence with care</b>
                <span className="text-muted">Rigorous learning in a nurturing, family atmosphere.</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Highlights slider: full width, pinned to the bottom of the first screen ---------- */}
      <div
        aria-label="What we offer"
        className="group overflow-hidden border-y border-hair py-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex gap-12 pr-12">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 whitespace-nowrap text-[17px] font-medium text-ml-blue">
  <Icon className="size-8 text-ml-gold" aria-hidden="true" />
  {label}
</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}