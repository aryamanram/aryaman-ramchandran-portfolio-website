import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
import SectionHeading from '../Components/SectionHeading'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            title="Projects"
            subtitle="Everything I've built"
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
    </>
  )
}
