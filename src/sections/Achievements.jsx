import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import { HiStar, HiCode } from 'react-icons/hi'
import { FaRobot, FaRocket } from 'react-icons/fa'

const achievements = [
  { title: 'Dr. Kalam Young Achiever Award Finalist', icon: <HiStar size={28} />, color: '#FBBF24' },
  { title: 'Agentica 2.0 Finalist', icon: <FaRobot size={28} />, color: 'var(--accent)' },
  { title: 'Hacksprint 2.0 Finalist', icon: <HiCode size={28} />, color: '#34D399' },
  { title: 'BIT HACK Participant', icon: <FaRocket size={28} />, color: '#A78BFA' },
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" style={{ backgroundColor: 'var(--bg)' }}>
      <SectionTitle title="Achievements" subtitle="Recognition and milestones" />
      <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            className="border rounded-xl p-6 flex flex-col items-center gap-4 text-center cursor-default transition-colors"
          >
            <div style={{ color: a.color }}>{a.icon}</div>
            <p style={{ color: 'var(--heading)' }} className="font-medium text-sm leading-snug">{a.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
