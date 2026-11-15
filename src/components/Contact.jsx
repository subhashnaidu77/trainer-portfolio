import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { profile } from '../data'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-panel">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s talk training roles</h2>
          <p className="section-lead">
            Open to technical trainer positions, MERN/DSA workshops, and mentorship programs —
            backed by 2+ years of hands-on teaching experience.
          </p>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href={`mailto:${profile.email}`}>
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`}>
            <FiPhone /> {profile.phone}
          </a>
          <span>
            <FiMapPin /> {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
