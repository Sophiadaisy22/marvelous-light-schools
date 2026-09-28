import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Values from './pages/Values.jsx'
import Ethos from './pages/Ethos.jsx'
import Facilities from './pages/Facilities.jsx'
import Leadership from './pages/Leadership.jsx'
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="values" element={<Values />} />
        <Route path="ethos" element={<Ethos />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="why-choose-us" element={<WhyChooseUsPage />} />
      </Route>
    </Routes>
  )
}