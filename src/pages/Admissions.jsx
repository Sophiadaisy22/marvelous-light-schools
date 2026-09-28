import { useState } from 'react'
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import heroImg from '../assets/images/schoolHero.jpg'

// ---- Edit the content here ----
const steps = [
  { title: 'Explore', text: 'Browse our website to know more about us.' },
  { title: 'Apply', text: 'Complete the application form.' },
  { title: 'Assessment', text: 'Your child spends a friendly assessment session with our teachers.' },
  { title: 'Offer', text: 'We review your application and send you an offer of admission.' },
  { title: 'Enrolment', text: 'Accept your offer, complete payment and get ready for the first day.' },
]

const requirements = [
  'Completed application form',
  'Copy of birth certificate',
  'Two recent passport photographs',
  'Immunisation and medical records',
 
]

const classOptions = ['Creche', 'KG', 'Nursery 1', 'Nursery 2', 'Primary 1 – 5', 'JSS 1 – 3', 'SS 1 – 3']

const faqs = [
  {
    q: 'When can my child join?',
    a: 'We accept applications throughout the year, subject to space in the class. The main intake is at the start of the academic year in September.',
  },
  {
    q: 'Is there an entrance assessment?',
    a: 'Yes, for Primary and above. It is a friendly session that helps us understand your child’s strengths and place them in the right class. Early Years children join a short play session instead.',
  },
  {
    q: 'Can I visit before applying?',
    a: 'Absolutely. We encourage every family to visit. Use the form on this page to book a private tour, and meet our teachers and see the classrooms.',
  },
  {
    q: 'How do I find out about fees?',
    a: 'Our admissions team will share the current fee schedule when you book a visit or contact us. Flexible payment plans are available.',
  },
]

// `href` makes an item tappable (tel: opens the dialer, mailto: opens email)
const contact = [
  { icon: FaPhoneAlt, label: 'Phone', text: '+234 703 869 2765', href: 'tel:+2347038692765' },
  { icon: FaEnvelope, label: 'Email', text: 'lifesucess.school@gmail.com', href: 'mailto:lifesucess.school@gmail.com' },
  { icon: FaClock, label: 'Office hours', text: 'Monday to Friday, 7:30am – 4pm' },
    {
    icon: FaMapMarkerAlt,
    label: 'Address',
    text: '5,Martins Street, Ota, Ogun State.',
    href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x103b9904029d8d17:0x366351f94fcc9941?sa=X&ved=1t:8290&ictx=111',
  },
]

const inputClass =
  'w-full min-h-[52px] rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition focus:border-ml-blue focus:outline-none focus:ring-4 focus:ring-ml-blue/10'

export default function Admissions() {
  const [status, setStatus] = useState({ type: '', text: '' })

  // Checks required fields, then shows a thank-you message.
  // Connect this to your email service or backend later.
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid')
      setStatus({ type: 'error', text: 'Please fill in all the required fields.' })
      firstInvalid?.focus()
      return
    }
    setStatus({ type: 'success', text: 'Thank you! Our admissions team will contact you within one working day.' })
    form.reset()
  }

  return (
    <>
      {/* ---------- Header ---------- */}
      <PageHero
        title="Admissions"
        intro="Join the Marvelous Light family. Here is everything you need to get started."
        image={heroImg}
        position="center 35%"
      />

      {/* ---------- How to apply: 5 steps ---------- */}
      <section aria-labelledby="steps-title" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
          <h2
            id="steps-title"
            className="text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
          >
            How to apply
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-[52ch] text-center text-[17px] font-light text-muted md:mb-16">
            Five simple steps. Most families complete the process within a few weeks.
          </p>

          <ol className="grid border-l-2 border-ml-blue-100 lg:grid-cols-5 lg:border-l-0 lg:border-t-2">
            {steps.map((s, i) => (
              <li key={s.title} className="relative pb-10 pl-8 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-10">
                {/* Dot on the line */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1 size-3 rounded-full bg-ml-orange ring-4 ring-white lg:-top-[7px] lg:left-0"
                />
                <span className="text-sm font-semibold tracking-[0.08em] text-ml-orange">STEP 0{i + 1}</span>
                <h3 className="mt-2 text-[20px] font-semibold text-ml-blue">{s.title}</h3>
                <p className="mt-2 text-[15px] font-light text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- What you'll need ---------- */}
      <section aria-labelledby="needs-title" className="bg-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 xl:px-10">
          <div>
            <h2
              id="needs-title"
              className="text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
            >
              What you’ll need
            </h2>
            <p className="mt-5 text-[17px] font-light text-muted md:text-lg">
              Having these ready will make your application quick and smooth. If anything is missing, our
              admissions team is happy to help.
            </p>
          </div>
          <ul className="grid gap-3">
            {requirements.map((r) => (
              <li
                key={r}
                className="flex items-center gap-4 rounded-md border border-hair bg-white px-5 py-4 text-[16px] text-ink"
              >
                <FaCheckCircle className="size-5 flex-none text-ml-blue" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Book a visit: form + contact ---------- */}
      <section aria-labelledby="visit-title" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-5 md:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 xl:px-10">
          {/* Form */}
          <div className="rounded-md border border-hair p-6 md:p-10">
            <h2
              id="visit-title"
              className="text-[clamp(24px,2.6vw,34px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue mb-8 "
            >
              Book a school visit
            </h2>
            

            <form noValidate onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="parent-name" className="text-sm font-medium text-ink">Parent’s full name *</label>
                <input id="parent-name" name="name" required placeholder="Your full name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-ink">Phone number *</label>
                <input id="phone" name="phone" type="tel" required placeholder="+234" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">Email address *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="class" className="text-sm font-medium text-ink">Class of interest</label>
                <select id="class" name="class" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select a class</option>
                  {classOptions.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="date" className="text-sm font-medium text-ink">Preferred visit date</label>
                <input id="date" name="date" type="date" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="notes" className="text-sm font-medium text-ink">Anything we should know?</label>
                <textarea id="notes" name="notes" rows={4} placeholder="Optional" className={`${inputClass} resize-y`} />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-navy px-8 text-[15px] font-medium text-white transition-colors hover:bg-ml-blue"
                >
                  Request a visit
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-[15px] ${status.type === 'error' ? 'text-red-600' : 'text-ml-green'}`}
                >
                  {status.text}
                </p>
              </div>
            </form>
          </div>

          {/* Contact admissions */}
          <aside aria-label="Contact admissions" className="rounded-md bg-ml-navy p-8 text-white md:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ml-yellow">Contact admissions</h2>
            <p className="mt-3 text-[16px] font-light text-white/75">
              Questions about places, fees or the process? We are happy to help.
            </p>
                        <ul className="mt-8 grid gap-6">
              {contact.map(({ icon: Icon, label, text, href }) => (
                <li key={label} className="flex gap-4">
                  <Icon className="mt-1 size-5 flex-none text-ml-yellow" aria-hidden="true" />
                  <div className="min-w-0">
                    <span className="block text-[13px] uppercase tracking-[0.08em] text-white/60">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="break-words text-[16px] transition-colors hover:text-ml-yellow">{text}</a>
                    ) : (
                      <span className="text-[16px]">{text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section aria-labelledby="faq-title" className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-[860px] px-5 md:px-8">
          <h2
            id="faq-title"
            className="mb-10 text-center text-[clamp(26px,3vw,40px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue md:mb-14"
          >
            Frequently asked questions
          </h2>
          <div className="grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-md border border-hair bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[17px] font-semibold text-ml-blue [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <FaChevronDown
                    className="size-4 flex-none text-ml-blue transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-6 pb-6 text-[16px] font-light text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}