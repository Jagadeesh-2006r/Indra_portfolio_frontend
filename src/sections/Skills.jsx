import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { stagger, fadeUp } from '../utils/motion'
import {
  SiC, SiOpenjdk, SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress,
  SiSpring, SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub,
  SiPostman, SiCanva,
} from 'react-icons/si'
import { HiCode, HiDatabase, HiChip, HiDesktopComputer, HiCloud } from 'react-icons/hi'

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiC /> },
      { name: 'Java', icon: <SiOpenjdk /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'React Native', icon: <SiReact /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Spring Boot', icon: <SiSpring /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <HiDesktopComputer /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Canva', icon: <SiCanva /> },
      { name: 'Power BI', icon: <HiChip /> },
      { name: 'AWS', icon: <HiCloud /> },
      { name: 'Thunder Client', icon: <HiCode /> },
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'DSA', icon: <HiCode /> },
      { name: 'OOPS', icon: <HiChip /> },
      { name: 'DBMS', icon: <HiDatabase /> },
      { name: 'DCN', icon: <HiDesktopComputer /> },
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" style={{ backgroundColor: 'var(--card)' }}>
      <SectionTitle title="Skills" subtitle="Technologies I work with" />
      <motion.div variants={stagger} className="space-y-10">
        {categories.map((cat, ci) => (
          <motion.div key={ci} variants={fadeUp}>
            <h3 style={{ color: 'var(--accent-h)' }} className="font-semibold mb-4 text-lg">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  whileHover={{ scale: 1.08, y: -3 }}
                  style={{
                    backgroundColor: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--body)',
                  }}
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm cursor-default transition-colors"
                >
                  <span style={{ color: 'var(--accent)' }} className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
