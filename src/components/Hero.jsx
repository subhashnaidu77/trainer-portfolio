import { motion } from 'framer-motion'
import { FiArrowDownRight, FiMail } from 'react-icons/fi'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p
            className="hero-brand"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {profile.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          >
            {profile.title}
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: 'easeOut' }}
          >
            <a className="btn btn-primary" href="#contact">
              <FiMail /> Contact Me
            </a>
            <a className="btn btn-ghost" href="#experience">
              View Training Experience <FiArrowDownRight />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="hero-panel">
            <div className="hero-panel-top">
              <span />
              <span />
              <span />
            </div>
            <pre className="hero-code">{`const trainer = {
  experience: "2+ years",
  focus: ["MERN", "Java Full Stack", "DSA"],
  batchSize: "50–180",
  mode: ["offline", "online"],
  outcome: "job-ready skills"
}`}</pre>
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>Training since {profile.trainingSince.split(' ')[0]} 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
