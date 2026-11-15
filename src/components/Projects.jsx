import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected builds</h2>
          <p className="section-lead">
            Teaching projects and client delivery that demonstrate full-stack ownership.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="project-stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {project.link ? (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Visit live site <FiExternalLink />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
