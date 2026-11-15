import { motion } from 'framer-motion'
import { experience, profile } from '../data'

export default function Experience() {
  const trainingRoles = experience.filter((job) => job.isTraining)
  const otherRoles = experience.filter((job) => !job.isTraining)

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            {profile.trainingYears} years of technical training experience
          </h2>
          <p className="section-lead">
            Trainer-first career path — continuous mentoring since January 2024, plus large-batch
            institutional training and supporting software development work.
          </p>
        </motion.div>

        <motion.p
          className="experience-group-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Training & Mentorship Roles
        </motion.p>

        <div className="timeline">
          {trainingRoles.map((job, index) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} index={index} />
          ))}
        </div>

        <motion.p
          className="experience-group-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Software Development Roles
        </motion.p>

        <div className="timeline">
          {otherRoles.map((job, index) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ job, index }) {
  return (
    <motion.article
      className={`timeline-item ${job.isTraining ? 'timeline-item-training' : ''}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-content">
        <div className="timeline-head">
          <div>
            <div className="timeline-badges">
              {job.isTraining ? <span className="badge-training">Technical Trainer</span> : null}
            </div>
            <h3>{job.role}</h3>
            <p className="timeline-company">{job.company}</p>
          </div>
          <div className="timeline-meta">
            <span>{job.period}</span>
            <span>{job.location}</span>
          </div>
        </div>
        <ul>
          {job.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
