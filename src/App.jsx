import { useState, useEffect, createContext } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Internship from './sections/Internship'
import Achievements from './sections/Achievements'
import Certificates from './sections/Certificates'
import CodingProfiles from './sections/CodingProfiles'
import TechJourney from './sections/TechJourney'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export const ThemeContext = createContext()

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div style={{ backgroundColor: 'var(--bg)', color: 'var(--body)' }}>
        <Navbar />
        <main className="pt-16">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Internship />
          <Achievements />
          <Certificates />
          <CodingProfiles />
          <TechJourney />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
