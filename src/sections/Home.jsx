import { motion } from 'framer-motion'
import { HiDocumentText, HiMail } from 'react-icons/hi'

export default function Home() {
  return (
    <section
      id="home"
      style={{ backgroundColor: 'var(--bg)' }}
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <p style={{ color: 'var(--accent)' }} className="font-medium mb-2 tracking-widest text-sm uppercase">
            Welcome to my portfolio
          </p>
          <h1 style={{ color: 'var(--heading)' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Indra <span style={{ color: 'var(--accent)' }}>Priyadharshini</span> V
          </h1>
          <motion.p
            style={{ color: 'var(--accent-h)' }}
            className="mt-4 text-lg md:text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Aspiring Software Engineer | Full Stack Developer | AI Enthusiast
          </motion.p>
          <p style={{ color: 'var(--body)' }} className="mt-4 max-w-xl leading-relaxed">
            Passionate Information Technology student with a strong interest in Full Stack Development,
            Artificial Intelligence, and Software Engineering. Dedicated to building scalable
            applications and solving real-world problems through technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: 'var(--btn)', color: 'var(--btn-text)' }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90"
            >
              <HiDocumentText size={18} /> View Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              className="flex items-center gap-2 border-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90"
            >
              <HiMail size={18} /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              style={{
                borderColor: 'var(--accent)',
                boxShadow: 'var(--profile-glow)',
              }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 overflow-hidden"
            >
              <img
                src="/images/profile.jpg"
                alt="Indra Priyadharshini"
                className="w-full h-full rounded-full object-cover" style={{ objectPosition: '90% 17%' }}
                onError={e => {
                  e.target.onerror = null
                  e.target.src = 'https://ui-avatars.com/api/?name=Indra+Priyadharshini&background=2563EB&color=fff&size=320&bold=true'
                }}
              />
            </motion.div>
            <div style={{ backgroundColor: 'var(--accent)' }} className="absolute inset-0 rounded-full opacity-10 blur-2xl -z-10" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
