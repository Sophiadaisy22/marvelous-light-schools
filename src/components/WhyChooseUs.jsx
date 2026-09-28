import {
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaHandshake,
} from 'react-icons/fa'

// ---- Edit the reasons here ----
const reasons = [
  {
    icon: FaGraduationCap,
    title: 'Academic excellence',
    text: 'High expectations, clear progress tracking and results that open doors.',
  },
  {
    icon: FaHeart,
    title: 'Character first',
    text: 'Integrity, respect and compassion are taught, modelled and celebrated.',
  },
  {
    icon: FaLaptopCode,
    title: 'Technology for learning',
    text: 'Coding, robotics and digital skills woven into everyday lessons.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Dedicated educators',
    text: 'Qualified, caring teachers who keep learning themselves.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe environment',
    text: 'A secure campus and a pastoral team that notices the small things.',
  },
  {
    icon: FaHandshake,
    title: 'Parent partnership',
    text: "Regular updates, open-door meetings and a strong parents' forum.",
  },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* ---------- Header ---------- */}
        <h2
          id="why-title"
          className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-14"
        >
          Why choose us
        </h2>

        {/* ---------- Cards ---------- */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
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
  )
}