import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import { HiCheckCircle, HiBriefcase } from 'react-icons/hi'

const points = [
  'JWT Authentication',
  'Role Based Access Control',
  'REST APIs',
  'MongoDB Integration',
  'Express Backend Development',
  'React Frontend Development',
]

export default function Internship() {
  return (
    <SectionWrapper id="internship" style={{ backgroundColor: 'var(--card)' }}>
      <SectionTitle title="Internship" subtitle="Professional experience" />
      <motion.div
        variants={fadeUp}
        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
        className="max-w-3xl mx-auto border rounded-2xl p-8 transition-colors hover:border-[var(--accent)]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div style={{ backgroundColor: 'var(--btn)' }} className="w-12 h-12 rounded-xl flex items-center justify-center">
            <HiBriefcase size={24} className="text-white" />
          </div>
          <div>
            <h3 style={{ color: 'var(--heading)' }} className="text-xl font-bold">MERN Stack Internship</h3>
            <p style={{ color: 'var(--accent)' }} className="text-sm">Full Stack Development</p>
          </div>
        </div>
        <p style={{ color: 'var(--body)' }} className="mb-6 leading-relaxed">
          Completed MERN Stack Internship with hands-on experience in building full-stack web applications,
          implementing secure authentication systems, and designing scalable RESTful APIs.
        </p>
        <motion.ul variants={stagger} className="grid sm:grid-cols-2 gap-3">
          {points.map((pt, i) => (
            <motion.li key={i} variants={fadeUp} style={{ color: 'var(--body)' }} className="flex items-center gap-2 text-sm">
              <HiCheckCircle size={18} style={{ color: 'var(--accent)' }} className="flex-shrink-0" />
              {pt}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionWrapper>
  )
}
