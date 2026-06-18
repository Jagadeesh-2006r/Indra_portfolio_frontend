import { useState, useContext } from 'react'
import { ThemeContext } from '../App'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home','About','Skills','Projects','Internship','Achievements','Certificates','Coding','Journey','Contact']

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'var(--navbar)', borderColor: 'var(--border)' }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span style={{ color: 'var(--accent)' }} className="font-bold text-xl tracking-wide">Indra</span>

        <ul className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'var(--body)' }}>
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--body)' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-h)'}
                onMouseLeave={e => e.target.style.color = 'var(--body)'}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            style={{ color: 'var(--body)' }}
            className="transition-colors hover:opacity-80"
          >
            {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button
            className="md:hidden"
            style={{ color: 'var(--body)' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ backgroundColor: 'var(--navbar)', borderColor: 'var(--border)', color: 'var(--body)' }}
            className="md:hidden overflow-hidden border-t px-4 pb-4 flex flex-col gap-3 text-sm"
          >
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  style={{ color: 'var(--body)' }}
                  className="transition-colors hover:opacity-80"
                >
                  {l}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
