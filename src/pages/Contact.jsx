import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import { FORMSPREE_CONTACT } from '../config.js'
import { sendForm } from '../lib/sendForm.js'

// ---- Edit the contact details here ----
const MAP_LINK =
  'https://www.google.com/maps/place//data=!4m2!3m1!1s0x103b9904029d8d17:0x366351f94fcc9941?sa=X&ved=1t:8290&ictx=111'
// Map shown on the page (uses the school's Plus Code for an exact location)
const MAP_EMBED = 'https://www.google.com/maps?q=M6R7%2B47G+Ota+Ogun+State&z=16&output=embed'

const cards = [
  { icon: FaPhoneAlt, title: 'Call us', text: '+234 703 869 2765', href: 'tel:+2347038692765' },
  { icon: FaEnvelope, title: 'Email us', text: 'lifesucess.school@gmail.com', href: 'mailto:lifesucess.school@gmail.com' },
  { icon: FaMapMarkerAlt, title: 'Visit us', text: '5 Martins Street, Ota, Ogun State', href: MAP_LINK },
  { icon: FaClock, title: 'Office hours', text: 'Monday to Friday, 7:30am – 4pm' },
]

const subjects = ['Admissions enquiry', 'Book a school visit', 'Fees and payments', 'General enquiry']

const inputClass =
  'w-full min-h-[52px] rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition focus:border-ml-blue focus:outline-none focus:ring-4 focus:ring-ml-blue/10'

export default function Contact() {
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)

  // Checks the fields, sends the message to Formspree, then shows the result
  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      setStatus({ type: 'error', text: 'Please fill in all the required fields.' })
      form.querySelector(':invalid')?.focus()
      return
    }

    setSending(true)
    setStatus({ type: '', text: '' })
    const ok = await sendForm(FORMSPREE_CONTACT, form)
    setSending(false)

    if (ok) {
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent. We will reply within one working day.' })
      form.reset()
    } else {
      setStatus({ type: 'error', text: 'Sorry, something went wrong. Please try again, or call us on +234 703 869 2765.' })
    }
  }

  return (
    <>
      {/* ---------- Header: plain, no background image ---------- */}
      <PageHero
        variant="plain"
        title="Contact us"
        intro="We’d love to hear from you. Reach us in whichever way suits you best."
      />

      {/* ---------- Contact cards ---------- */}
      <section aria-label="Ways to reach us" className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 xl:px-10">
          {cards.map(({ icon: Icon, title, text, href }) => {
            const content = (
              <>
                <Icon className="mb-6 size-8 text-ml-blue" aria-hidden="true" />
                <h2 className="text-[19px] font-semibold text-ml-blue">{title}</h2>
                <p className="mt-2 break-words text-[15px] font-light text-muted">{text}</p>
              </>
            )
            const cardClass = 'block h-full rounded-md border border-hair bg-white p-8 transition-all duration-300'

            return href ? (
              <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`${cardClass} hover:-translate-y-1 hover:border-transparent hover:shadow-lift`}>{content}</a>
            ) : (
              <div key={title} className={cardClass}>{content}</div>
            )
          })}
        </div>
      </section>

      {/* ---------- Message form + map ---------- */}
      <section aria-labelledby="message-title" className="bg-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-stretch gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 xl:px-10">
          {/* Form */}
          <div className="rounded-md border border-hair bg-white p-6 md:p-10">
            <h2
              id="message-title"
              className="mb-8 text-[clamp(24px,2.6vw,34px)] font-bold uppercase leading-[1.2] tracking-[0.02em] text-ml-blue"
            >
              Send us a message
            </h2>

            <form noValidate onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              {/* Hidden: sets the email subject line you receive */}
              <input type="hidden" name="_subject" value="New message from the website (Contact page)" />
              {/* Hidden spam trap: real people never fill this in */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="flex flex-col gap-2">
                <label htmlFor="c-name" className="text-sm font-medium text-ink">Full name *</label>
                <input id="c-name" name="name" required placeholder="Your full name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-phone" className="text-sm font-medium text-ink">Phone number *</label>
                <input id="c-phone" name="phone" type="tel" required placeholder="+234" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="c-email" className="text-sm font-medium text-ink">Email address *</label>
                <input id="c-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="c-subject" className="text-sm font-medium text-ink">Subject</label>
                <select id="c-subject" name="subject" defaultValue="" className={inputClass}>
                  <option value="" disabled>Choose a subject</option>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="c-message" className="text-sm font-medium text-ink">Message *</label>
                <textarea id="c-message" name="message" rows={5} required placeholder="How can we help?" className={`${inputClass} resize-y`} />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-navy px-8 text-[15px] font-medium text-white transition-colors hover:bg-ml-blue disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send message'}
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

          {/* Map */}
          <div className="relative min-h-[360px] overflow-hidden rounded-md border border-hair bg-white lg:min-h-0">
            <iframe
              title="Map showing the location of Marvelous Light Schools"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}