import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Navbar from '../Components/Navbar'
import SectionHeading from '../Components/SectionHeading'
import { education, experience, skills } from '../data/resume'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
}

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-display text-2xl font-bold text-text">Resume</h1>
            <div className="mt-3 h-[2px] w-10 bg-accent" />
          </div>
          <a
            href="/pdfs/Aryaman Ramchandran Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-text no-underline bg-surface px-4 py-2 rounded border border-border hover:border-accent/30 hover:bg-accent-light transition-colors duration-150"
          >
            <Download size={14} />
            Download PDF
          </a>
        </motion.div>

        {/* Education */}
        <section className="mb-12">
          <SectionHeading title="Education" />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-lg p-5"
              >
                <div className="flex items-start justify-between flex-wrap gap-1 mb-1">
                  <h3 className="text-sm font-semibold text-text">{edu.school}</h3>
                  <span className="text-[12px] text-text-tertiary">{edu.date}</span>
                </div>
                <div className="flex items-start justify-between flex-wrap gap-1">
                  <p className="text-sm text-text-secondary">{edu.degree} &middot; {edu.gpa}</p>
                  <span className="text-[12px] text-text-tertiary">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <SectionHeading title="Experience" />
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-lg p-5"
              >
                <div className="flex items-start justify-between flex-wrap gap-1 mb-0.5">
                  <h3 className="text-sm font-semibold text-text">{exp.title}</h3>
                  <span className="text-[12px] text-text-tertiary">{exp.date}</span>
                </div>
                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                  <p className="text-sm text-text-secondary italic">{exp.company}</p>
                  <span className="text-[12px] text-text-tertiary">{exp.location}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-[13px] text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading title="Technical Skills" />
          <motion.div
            {...fadeUp}
            className="bg-surface border border-border rounded-lg p-5 space-y-3"
          >
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-text-tertiary mb-1.5">Languages</h3>
              <p className="text-sm text-text-secondary">{skills.languages}</p>
            </div>
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-text-tertiary mb-1.5">Libraries & Tools</h3>
              <p className="text-sm text-text-secondary">{skills.libraries}</p>
            </div>
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-wider text-text-tertiary mb-1.5">Coursework</h3>
              <p className="text-sm text-text-secondary">{skills.coursework}</p>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
