import { motion } from 'framer-motion'
import { profile, trainingHighlights } from '../data'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">About</p>
            <h2 className="section-title">
              {profile.trainingYears} years shaping job-ready developers
            </h2>
            <p className="section-lead">{profile.summary}</p>
          </motion.div>

          <motion.ul
            className="about-points"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <li>
              <strong>Continuous training since 2024</strong>
              <span>
                Independent mentoring plus institutional roles at CCC Digital and StudentTribe.
              </span>
            </li>
            <li>
              <strong>Live & online sessions</strong>
              <span>
                MERN, Java Full Stack online classes, and DSA workshops for batches of 50–180
                learners.
              </span>
            </li>
            <li>
              <strong>Curriculum & assessment</strong>
              <span>Structured modules, hands-on labs, code reviews, and capstone guidance.</span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="training-highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {trainingHighlights.map((item) => (
            <div key={item.label} className="training-highlight">
              <p className="training-highlight-value">{item.value}</p>
              <p className="training-highlight-label">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
