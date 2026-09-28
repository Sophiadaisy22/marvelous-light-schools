import { useEffect, useRef, useState } from 'react'

// ---- Edit the figures here (these are SAMPLE numbers, replace with real ones) ----
const stats = [
  { value: '10+', label: 'Years of nurturing bright minds' },
  { value: '500', label: 'Students from Creche to SS 3' },
  { value: '98%', label: 'WAEC credit pass rate' },
  { value: '10', label: 'Clubs, sports and societies' },
]

// Counts from 0 up to the number when it scrolls into view
function CountUp({ value, duration = 2000 }) {
  // Split "1,200" into the number (1200) and "20+" into 20 and "+"
  const [, digits, suffix] = value.match(/^([\d,]+)(.*)$/)
  const end = Number(digits.replace(/,/g, ''))

  // People who turn off animations on their device see the final number straight away
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [count, setCount] = useState(reduceMotion ? end : 0)
  const ref = useRef(null)

  useEffect(() => {
    if (reduceMotion) return
    let frame

    // Wait until the number is visible on screen, then start counting
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect() // only count once

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3) // fast at first, gently slowing at the end
          setCount(Math.round(end * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration, reduceMotion])

  return (
    <span ref={ref}>
      {/* Screen readers hear the final number, not every step of the count */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {count.toLocaleString('en-US')}
        {suffix}
      </span>
    </span>
  )
}

export default function Impact() {
  return (
    <section aria-labelledby="impact-title" className="bg-ml-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* ---------- Header ---------- */}
        <h2
          id="impact-title"
          className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-white md:mb-14"
        >
          Our impact
        </h2>

        {/* ---------- Figures ---------- */}
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center lg:border-l lg:border-white/15 lg:px-6 lg:first:border-l-0"
            >
              <span className="mx-auto mb-5 block h-[3px] w-10 rounded-full bg-ml-orange" aria-hidden="true" />
              <dd className="text-[clamp(44px,4.6vw,64px)] font-bold leading-none tracking-[-0.04em] text-white tabular-nums">
                <CountUp value={s.value} />
              </dd>
              <dt className="mx-auto mt-4 max-w-[22ch] text-[15px] font-light text-white/70">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}