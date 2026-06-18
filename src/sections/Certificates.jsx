import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import { HiCloud, HiCode, HiExternalLink, HiLightBulb, HiChatAlt2 } from 'react-icons/hi'

const certs = [
  {
    icon: <HiLightBulb size={28} />,
    title: 'Generative AI and Large Language Models',
    platform: 'Coursera',
    year: '2024',
    link: '#',
  },
  {
    icon: <HiChatAlt2 size={28} />,
    title: 'NLP – Building Your Own Chatbots Using AI',
    platform: 'Coursera',
    year: '2024',
    link: '#',
  },
  {
    icon: <HiCloud size={28} />,
    title: 'Introduction to Networking and Cloud Computing',
    platform: 'Microsoft',
    year: '2024',
    link: '#',
  },
  {
    icon: <HiCode size={28} />,
    title: 'Mastering Data Structures and Algorithms using C & CPP',
    platform: 'Udemy',
    year: '2024',
    link: '#',
  },
]

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" style={{ backgroundColor: 'var(--card)' }}>
      <SectionTitle title="Certificates" subtitle="Courses and certifications" />
      <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
            className="border rounded-xl p-6 flex flex-col gap-3 transition-colors"
          >
            <div style={{ color: 'var(--accent)' }}>{c.icon}</div>
            <p style={{ color: 'var(--heading)' }} className="font-semibold text-sm leading-snug flex-1">{c.title}</p>
            <p style={{ color: 'var(--accent-h)' }} className="text-xs">{c.platform} · {c.year}</p>
            <a
              href={c.link}
              style={{ color: 'var(--accent)' }}
              className="flex items-center gap-1 text-xs transition-colors hover:opacity-75 mt-auto"
            >
              <HiExternalLink size={14} /> View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
