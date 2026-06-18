import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { fadeUp, stagger } from '../utils/motion'
import { HiCode, HiLightBulb, HiAcademicCap, HiUserGroup } from 'react-icons/hi'

const highlights = [
  { icon: <HiCode size={24} />, label: 'Full Stack Dev' },
  { icon: <HiLightBulb size={24} />, label: 'AI Enthusiast' },
  { icon: <HiAcademicCap size={24} />, label: 'IT Student' },
  { icon: <HiUserGroup size={24} />, label: 'Hackathon Participant' },
]

export default function About() {
  return (
    <SectionWrapper id="about" style={{ backgroundColor: 'var(--bg)' }}>
      <SectionTitle title="About Me" subtitle="A little about who I am" />
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <motion.div variants={stagger} className="flex-1 space-y-4 leading-relaxed">
          {[
            'Aspiring Information Technology professional with strong skills in Full Stack Web Development and Software Engineering.',
            'Experienced in building scalable applications using React, Node.js, Spring Boot, and modern databases.',
            'Completed a MERN Stack internship with hands-on experience in authentication, role-based access control, RESTful APIs, and database management.',
            'Actively involved in hackathons and technical events, demonstrating teamwork, innovation, and problem-solving abilities.',
            'Passionate about developing efficient, user-friendly digital solutions and continuously learning emerging technologies.',
          ].map((text, i) => (
            <motion.p key={i} variants={fadeUp} style={{ color: 'var(--body)' }}>{text}</motion.p>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-2 gap-4 flex-shrink-0">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--accent)',
              }}
              className="border rounded-xl p-5 flex flex-col items-center gap-2 cursor-default transition-colors"
            >
              {h.icon}
              <span style={{ color: 'var(--body)' }} className="text-sm font-medium text-center">{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
