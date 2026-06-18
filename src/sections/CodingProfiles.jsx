import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import { SiSkillshare, SiLeetcode, SiCodechef } from 'react-icons/si'
import { HiExternalLink } from 'react-icons/hi'

const profiles = [
  {
    platform: 'Skillrack',
    icon: <SiSkillshare size={32} />,
    stats: ['750+ Problems Solved', '200+ Bronze Medals'],
    link: 'https://www.skillrack.com',
    color: '#FB923C',
  },
  {
    platform: 'LeetCode',
    icon: <SiLeetcode size={32} />,
    stats: ['150+ Problems Solved'],
    link: 'https://leetcode.com',
    color: '#FBBF24',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef size={32} />,
    stats: ['200+ Problems Solved'],
    link: 'https://www.codechef.com',
    color: 'var(--accent)',
  },
]

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding" style={{ backgroundColor: 'var(--bg)' }}>
      <SectionTitle title="Coding Profiles" subtitle="Competitive programming presence" />
      <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {profiles.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            className="border rounded-xl p-6 flex flex-col items-center gap-3 text-center transition-colors"
          >
            <span style={{ color: p.color }}>{p.icon}</span>
            <h3 style={{ color: 'var(--heading)' }} className="font-semibold">{p.platform}</h3>
            {p.stats.map((s, si) => (
              <p key={si} style={{ color: 'var(--body)' }} className="text-sm">{s}</p>
            ))}
            <span style={{ color: 'var(--accent)' }} className="flex items-center gap-1 text-xs mt-auto">
              <HiExternalLink size={14} /> View Profile
            </span>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
