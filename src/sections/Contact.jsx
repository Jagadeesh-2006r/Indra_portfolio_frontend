import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/SectionWrapper'
import { fadeUp } from '../utils/motion'
import axios from 'axios'
import { HiMail, HiUser, HiTag, HiChat, HiCheckCircle } from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await axios.post('/api/contact', form)
      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    backgroundColor: 'var(--bg)',
    borderColor: 'var(--border)',
    color: 'var(--heading)',
  }

  const inputClass = 'w-full border outline-none rounded-lg px-4 py-3 text-sm transition-colors pl-9'

  return (
    <SectionWrapper id="contact" style={{ backgroundColor: 'var(--bg)' }}>
      <SectionTitle title="Contact" subtitle="Let's connect" />
      <motion.div variants={fadeUp} className="max-w-xl mx-auto">
        {success ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ backgroundColor: 'var(--card)', borderColor: '#22C55E' }}
            className="border rounded-xl p-8 text-center"
          >
            <HiCheckCircle size={48} className="text-green-400 mx-auto mb-3" />
            <h3 style={{ color: 'var(--heading)' }} className="text-xl font-semibold">Message Sent!</h3>
            <p style={{ color: 'var(--body)' }} className="mt-2 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
            <button
              onClick={() => setSuccess(false)}
              style={{ color: 'var(--accent)' }}
              className="mt-4 text-sm hover:opacity-75 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            className="border rounded-2xl p-8 space-y-4"
          >
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name', icon: <HiUser /> },
              { name: 'email', type: 'email', placeholder: 'Your Email', icon: <HiMail /> },
              { name: 'subject', type: 'text', placeholder: 'Subject', icon: <HiTag /> },
            ].map(field => (
              <div key={field.name} className="relative">
                <span style={{ color: 'var(--input-ph)' }} className="absolute left-3 top-1/2 -translate-y-1/2">{field.icon}</span>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={inputStyle}
                  className={inputClass}
                />
              </div>
            ))}
            <div className="relative">
              <span style={{ color: 'var(--input-ph)' }} className="absolute left-3 top-4"><HiChat /></span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                style={inputStyle}
                className={`${inputClass} resize-none`}
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: 'var(--btn)', color: 'var(--btn-text)' }}
              className="w-full disabled:opacity-60 font-semibold py-3 rounded-lg transition-colors hover:opacity-90"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  )
}
