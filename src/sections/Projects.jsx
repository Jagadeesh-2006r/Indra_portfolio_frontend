import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import { SiReact, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'Intelligent Content Moderation System',
    description:
      'AI-powered content moderation system that detects harmful, offensive, or inappropriate content using NLP and Machine Learning techniques.',
    tech: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    links: { frontend: '#', backend: '#', demo: '#' },
  },
  {
    title: 'ScoutIQ – Sports Fitness App',
    description:
      'Fitness and sports analytics application that tracks user activities and provides performance insights.',
    tech: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    links: { frontend: '#', backend: '#', demo: '#' },
  },
  {
    title: 'Nagrik aur Samvidhan',
    description:
      'Educational application designed to improve awareness about constitutional rights and civic responsibilities.',
    tech: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    links: { frontend: '#', backend: '#', demo: '#' },
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" style={{ backgroundColor: 'var(--bg)' }}>
      <SectionTitle title="Projects" subtitle="Things I've built" />
      <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            className="border rounded-xl p-6 flex flex-col gap-4 transition-colors"
          >
            <div className="flex items-start gap-3">
              <HiCode size={22} style={{ color: 'var(--accent)' }} className="flex-shrink-0 mt-1" />
              <h3 style={{ color: 'var(--heading)' }} className="font-semibold leading-tight">{p.title}</h3>
            </div>
            <p style={{ color: 'var(--body)' }} className="text-sm leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, ti) => (
                <span
                  key={ti}
                  style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--accent-h)' }}
                  className="flex items-center gap-1 text-xs border px-2 py-1 rounded"
                >
                  {t.icon} {t.name}
                </span>
              ))}
            </div>
            <div style={{ borderColor: 'var(--border)' }} className="flex flex-wrap gap-4 pt-2 border-t">
              <a href={p.links.frontend} style={{ color: 'var(--accent)' }} className="flex items-center gap-1 text-xs transition-colors hover:opacity-75">
                <HiCode size={14} /> Frontend
              </a>
              <a href={p.links.backend} style={{ color: 'var(--accent)' }} className="flex items-center gap-1 text-xs transition-colors hover:opacity-75">
                <HiCode size={14} /> Backend
              </a>
              <a href={p.links.demo} style={{ color: 'var(--accent)' }} className="flex items-center gap-1 text-xs transition-colors hover:opacity-75">
                <HiExternalLink size={14} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
