export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: 'var(--navbar)', borderColor: 'var(--border)', color: 'var(--body)' }}
      className="border-t py-6 text-center text-sm transition-colors duration-300"
    >
      <p>© 2025 Indra Priyadharshini V. All rights reserved.</p>
      <p style={{ color: 'var(--accent)' }} className="mt-1">Built with React · Node.js · MongoDB</p>
    </footer>
  )
}
