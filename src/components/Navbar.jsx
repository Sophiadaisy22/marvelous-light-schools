import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo-blue.png'

// ---- Edit your menu here ----
const aboutLinks = [
  { to: '/about', label: 'About us' },
  { to: '/values', label: 'Our values' },
  { to: '/ethos', label: 'Our ethos' },
  { to: '/facilities', label: 'Our facilities' },
  { to: '/why-choose-us', label: 'Why choose us' },
]
const mainLinks = [
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const linkBase =
  'flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[15px] transition-colors hover:bg-soft hover:text-ml-blue'

// Your logo is white, so it sits on a deep-blue circle
function Logo({ size = 'size-[52px]' }) {
  return (
    <span className={`grid ${size} flex-none place-items-center  p-1`}>
      <img src={logo} alt="" className="size-full object-contain" />
    </span>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false) // mobile menu
  const [aboutOpen, setAboutOpen] = useState(false) // About dropdown
  
  const aboutRef = useRef(null)
  const { pathname } = useLocation()
  const aboutActive = aboutLinks.some((l) => l.to === pathname)

  const [prevPath, setPrevPath] = useState(pathname)
  if (pathname !== prevPath) {
    setPrevPath(pathname)
    setMenuOpen(false)
    setAboutOpen(false)
    // setMobileAboutOpen(false)
  }
  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const onClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setAboutOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const navClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'font-semibold text-ml-blue' : 'text-ink'}`

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-hair bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8 xl:px-10 ">
        {/* Logo + name */}
        <Link to="/" className="flex items-center gap-3.5 text-ml-blue">
          <Logo />
          <span>
            <b className="block text-[15px] font-semibold leading-tight sm:text-[17px]">
              Marvelous Light Schools
            </b>
            <span className="mt-0.5 hidden text-xs text-muted sm:block">
              Building Bright Minds, Shaping Future Leaders
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <NavLink to="/" end className={navClass}>Home</NavLink>
            </li>

            {/* About dropdown: opens on hover or click */}
            <li ref={aboutRef} className="group relative">
              <button
                type="button"
                aria-expanded={aboutOpen}
                aria-controls="about-menu"
                onClick={() => setAboutOpen((o) => !o)}
                className={`${linkBase} ${aboutActive || aboutOpen ? 'text-ml-blue' : 'text-ink'} ${aboutActive ? 'font-semibold' : ''} ${aboutOpen ? 'bg-soft' : ''}`}
              >
                About
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                  className={`size-3 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <ul
                id="about-menu"
                className={`absolute left-0 top-[calc(100%+10px)] min-w-[250px] rounded-md border border-hair bg-white p-2 shadow-lift ${aboutOpen ? 'block' : 'hidden'} group-hover:block`}
              >
                {aboutLinks.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block whitespace-nowrap rounded-md px-3.5 py-2.5 text-sm transition-colors hover:bg-soft hover:text-ml-blue ${isActive ? 'font-semibold text-ml-blue' : 'text-ink'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {mainLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={navClass}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Apply button (desktop) + menu button (mobile) */}
        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="hidden min-h-[52px] items-center rounded-md bg-ml-blue px-7 text-[15px] font-medium text-white transition-colors hover:bg-ml-blue-deep lg:inline-flex"
          >
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-12 place-items-center rounded-md bg-soft text-ml-blue lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

    
    </header>
      {/* Mobile slide-out menu */}
      <div className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${menuOpen ? 'visible' : 'pointer-events-none invisible'}`}>
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[min(360px,88vw)] flex-col gap-1.5 overflow-y-auto bg-white px-6 py-5 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <Logo size="size-12" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-12 place-items-center rounded-md bg-soft text-ml-blue"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <DrawerLink to="/" label="Home" />
          <DrawerLink to="/about" label="About" />
          {aboutLinks.slice(1).map((l) => (
            <DrawerLink key={l.to} to={l.to} label={l.label} sub />
          ))}
          {mainLinks.map((l) => (
            <DrawerLink key={l.to} to={l.to} label={l.label} />
          ))}

          <Link
            to="/admissions"
            className="mt-5 inline-flex min-h-[52px] items-center justify-center rounded-md bg-ml-blue px-7 text-[15px] font-medium text-white"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  )
}

function DrawerLink({ to, label, sub = false }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `border-b border-hair py-3 transition-colors hover:bg-soft hover:text-ml-blue ${sub ? 'pl-5 text-[15px] text-muted' : 'px-2 text-[17px] text-ink'} ${isActive ? 'font-semibold !text-ml-blue' : ''}`
      }
    >
      {label}
    </NavLink>
  )
}