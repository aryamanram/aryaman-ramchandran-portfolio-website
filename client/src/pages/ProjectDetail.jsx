import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Navbar from '../Components/Navbar'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
          <p className="text-text-secondary">Project not found.</p>
          <Link to="/projects" className="text-blue text-sm mt-2 inline-block no-underline hover:underline">
            Back to projects
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary no-underline hover:text-text transition-colors duration-150 mb-6"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <div className="flex items-start justify-between mb-2">
            <h1 className="font-display text-2xl font-bold text-text">
              {project.name}
            </h1>
            <span className="text-sm text-text-tertiary shrink-0 mt-1">
              {project.date}
            </span>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-muted text-blue"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="flex gap-3 mb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-bg px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
                >
                  <Github size={14} />
                  Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-bg px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
            </div>
          )}

          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-sm font-semibold text-text mb-3">Details</h2>
            <ul className="space-y-2">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  )
}
