import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      className={`py-20 px-4 transition-colors duration-300 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 style={{ color: 'var(--heading)' }} className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p style={{ color: 'var(--body)' }} className="mt-2 text-sm">{subtitle}</p>}
      <div style={{ backgroundColor: 'var(--accent)' }} className="mt-3 mx-auto w-16 h-1 rounded" />
    </div>
  )
}
