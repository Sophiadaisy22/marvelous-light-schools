import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

// Each page is downloaded only when someone visits it
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Values = lazy(() => import('./pages/Values.jsx'))
const Ethos = lazy(() => import('./pages/Ethos.jsx'))
const Facilities = lazy(() => import('./pages/Facilities.jsx'))
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage.jsx'))
const Programs = lazy(() => import('./pages/Programs.jsx'))
const Admissions = lazy(() => import('./pages/Admissions.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="values" element={<Values />} />
        <Route path="ethos" element={<Ethos />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="programs" element={<Programs />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}