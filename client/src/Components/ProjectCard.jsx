import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block no-underline"
      >
        <div className="bg-surface border border-border rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:border-border/80 hover:-translate-y-0.5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-base font-semibold text-text group-hover:text-accent transition-colors duration-150">
              {project.name}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-text-tertiary group-hover:text-accent transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5"
            />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-muted text-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[11px] text-text-tertiary shrink-0 ml-3">
              {project.date}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
