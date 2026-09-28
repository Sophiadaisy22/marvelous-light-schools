import { Link } from 'react-router-dom'

export default function AdmissionsBanner() {
  return (
    <section aria-labelledby="admissions-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-md bg-ml-blue px-6 py-14 text-center md:px-16 md:py-20">
          {/* Decorative gold rings */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-ml-yellow/30"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 size-64 rounded-full border border-ml-yellow/20"
          />

          <div className="relative">
            <h2
              id="admissions-title"
              className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-white"
            >
              Admissions are open for 2026/27
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-[17px] font-light text-white/75">
              Places are limited in every class. Visit the campus, meet our teachers and see how your
              child could thrive at Marvelous Light.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3.5 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-orange px-8 text-[15px] font-semibold text-ml-navy transition-colors hover:bg-[#f39247]"
              >
                Enroll now
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/50 px-8 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Book a school visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}