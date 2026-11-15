import { motion } from 'framer-motion'
import { certifications, education } from '../data'

export default function Education() {
  return (
    <section className="section" id="certifications">
      <div className="container education-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">{education.degree}</h2>
          <p className="edu-school">{education.school}</p>
          <p className="edu-meta">
            {education.period} · {education.location} · GPA {education.gpa}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Credentials</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
