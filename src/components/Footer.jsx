import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/images/logo.png'

// ---- Edit the footer content here ----
const quickLinks = [
  { to: '/about', label: 'About us' },
  { to: '/values', label: 'Our values' },
  { to: '/why-choose-us', label: 'Why choose us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const programs = ['Early Years', 'Primary School', 'Junior Secondary', 'Senior Secondary']

// `href` makes an item tappable (tel: opens the dialer, mailto: opens email, https opens Google Maps)
const contact = [
  {
    icon: FaMapMarkerAlt,
    text: '5 Martins Street, Ota, Ogun State',
    href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x103b9904029d8d17:0x366351f94fcc9941?sa=X&ved=1t:8290&ictx=111',
  },
  { icon: FaPhoneAlt, text: '+234 703 869 2765', href: 'tel:+2347038692765' },
  { icon: FaEnvelope, text: 'lifesucess.school@gmail.com', href: 'mailto:lifesucess.school@gmail.com' },
  { icon: FaClock, text: 'Mon – Fri, 7:30am – 4pm' },
]

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaXTwitter, label: 'X', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
]

const linkClass = 'text-[15px] font-light text-white/70 transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-ml-navy pt-20 pb-8 text-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-14">
          {/* ---------- Brand ---------- */}
          <div>
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="" className="size-16 flex-none" />
              <span className="text-lg font-semibold leading-tight">Marvelous Light Schools</span>
            </Link>
            <p className="mt-5 max-w-[34ch] text-[15px] font-light text-white/70">
              Building Bright Minds, Shaping Future Leaders. A premium school from Early Years to Senior
              Secondary in Ota, Ogun State.
            </p>

            {/* Social icons: no backgrounds, gold on hover */}
            <div className="mt-6 flex gap-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="text-white transition-colors hover:text-ml-yellow">
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ---------- Quick links ---------- */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-ml-yellow">Quick links</h3>
            <ul className="grid gap-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Programs ---------- */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-ml-yellow">Programs</h3>
            <ul className="grid gap-3">
              {programs.map((p) => (
                <li key={p}>
                  <Link to="/programs" className={linkClass}>{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-ml-yellow">Contact</h3>
            <ul className="grid gap-4">
              {contact.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-[15px] font-light text-white/70">
                  <Icon className="mt-1 size-4 flex-none text-ml-yellow" aria-hidden="true" />
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="min-w-0 break-words transition-colors hover:text-white">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-white/60 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Marvelous Light Schools. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}