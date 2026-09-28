import { FaStar, FaQuoteLeft } from 'react-icons/fa'

// ---- Edit the testimonials here ----
const testimonials = [
  {
    quote: 'My children look forward to school every morning. Their teachers know them, push them, and genuinely care.',
    name: '[Parent name]',
    role: 'Parent, Primary 4',
  },
  {
    quote: 'The move from Nursery to Primary was seamless. We always know how our daughter is doing.',
    name: '[Parent name]',
    role: 'Parent, Nursery 2',
  },
  {
    quote: 'Marvelous Light gave me the confidence to lead. I left ready for university and for life.',
    name: '[Alumni name]',
    role: 'Former head student',
  },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* ---------- Header ---------- */}
        <h2
          id="testimonials-title"
          className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-14"
        >
          What our families say
        </h2>

        {/* ---------- Cards ---------- */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-md border border-hair bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift"
            >
              {/* Stars + quote mark */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1 text-ml-gold" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} className="size-4" aria-hidden="true" />
                  ))}
                </div>
                <FaQuoteLeft className="size-7 text-ml-blue-100" aria-hidden="true" />
              </div>

              {/* Quote */}
              <blockquote className="text-[17px] font-light leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>

              {/* Name + role */}
              <figcaption className="mt-auto border-t border-hair pt-6">
                <b className="block text-[15px] font-semibold text-ml-blue">{t.name}</b>
                <span className="text-sm text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}