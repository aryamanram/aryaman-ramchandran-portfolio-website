import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SectionHeading from '../Components/SectionHeading'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../data/projects'

const featured = projects.filter((p) => p.featured)

export default function Home() {
  return (
    <>
      <Navbar delay={2.2} />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text"
          >
            Aryaman Ramchandran
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8, ease: 'easeOut' }}
            className="mt-4 text-text-secondary text-base sm:text-lg max-w-md mx-auto leading-relaxed"
          >
            Computer Scientist &middot; MS @ UIUC
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2, ease: 'easeOut' }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <a href="https://github.com/aryamanram" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text transition-colors duration-150">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/aryamanramchandran" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text transition-colors duration-150">
              <Linkedin size={18} />
            </a>
            <a href="mailto:aryaman@example.com" className="text-text-tertiary hover:text-text transition-colors duration-150">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <SectionHeading title="About" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface border border-border rounded-lg p-6"
        >
          <p className="text-sm text-text-secondary leading-relaxed">
            I'm a computer scientist pursuing my Master's at the University of Illinois at Urbana-Champaign.
            My interests span systems programming, machine learning, and full-stack development. I enjoy building
            tools that are both technically sound and well-crafted.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Selected work"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-blue font-medium no-underline hover:underline"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <SectionHeading title="Contact" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface border border-border rounded-lg p-6"
        >
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            I'm always open to discussing new opportunities, research, or interesting projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:aryaman@example.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-bg px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
            >
              <Mail size={14} />
              Email
            </a>
            <a
              href="https://github.com/aryamanram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-bg px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aryamanramchandran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-bg px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border-light">
        <p className="text-center text-[12px] text-text-tertiary">
          Aryaman Ramchandran &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
