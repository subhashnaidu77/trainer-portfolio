import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I teach and ship</h2>
          <p className="section-lead">
            Trainer-first skill set: mentoring and curriculum design, backed by full-stack delivery
            experience.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
