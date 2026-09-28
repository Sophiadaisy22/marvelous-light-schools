import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Loader from './Loader.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  // Start each new page at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        {/* While a page is downloading, show the Loader in its place */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}