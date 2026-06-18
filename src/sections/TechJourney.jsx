import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'

const events = [
  { year: '2024', title: 'Started Information Technology Journey' },
  { year: '2024', title: 'Learned Programming Fundamentals' },
  { year: '2025', title: 'Completed MERN Stack Internship' },
  { year: '2025', title: 'Built Full Stack Projects' },
  { year: '2025', title: 'Participated in National Hackathons' },
  { year: '2026', title: 'Expanded Skills in AI and Software Engineering' },
]

export default function TechJourney() {
  return (
    <SectionWrapper id="journey" style={{ backgroundColor: 'var(--card)' }}>
      <SectionTitle title="Tech Journey" subtitle="My growth timeline" />
      <div className="relative max-w-2xl mx-auto">
        <div style={{ backgroundColor: 'var(--border)' }} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5" />
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
                className="inline-block border rounded-xl px-4 py-3 transition-colors hover:border-[var(--accent)]"
              >
                <span style={{ color: 'var(--accent)' }} className="font-bold text-sm block">{e.year}</span>
                <p style={{ color: 'var(--body)' }} className="text-sm mt-1">{e.title}</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--bg)' }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
            />
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
