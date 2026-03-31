import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skills = {
  Languages: ["Python", "C/C++", "Java", "JavaScript", "SQL", "HTML/CSS"],
  "ML & AI": [
    "PyTorch",
    "TensorFlow",
    "NumPy",
    "Transformers",
    "PEFT/LoRA",
    "MLflow",
    "W&B",
  ],
  "Systems & Cloud": [
    "AWS",
    "gRPC",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
  ],
  "Web & Tools": ["React", "Node.js", "Express", "TailwindCSS", "Git"],
};

const coursework = [
  "Distributed Systems",
  "Applied Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Database Systems",
  "Parallel Programming",
];

export default function About() {
  return (
    <div className="pt-52 pb-40">
      {/* Page Header */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-secondary text-sm tracking-widest uppercase mb-4"
          >
            About
          </motion.p>
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-primary"
          >
            A bit about me.
          </motion.h1>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 mt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            `I'm Aryaman — a computer scientist studying at the University of Illinois at Urbana-Champaign, where I'm pursuing my Masters with a focus on Artificial Intelligence and Data Science. Before UIUC, I earned my B.S. in Computer Science from Loyola Marymount University in Los Angeles.`,
            `The two fields that drive me are Machine Learning and Distributed Systems. I'm fascinated by the problems that live at their intersection — building intelligent systems that scale, and understanding the infrastructure that makes that possible. One of my favorite courses at UIUC has been CS 425 Distributed Systems, which gets underneath the fundamentals of distributed computing in a way that permanently changed how I think about building software.`,
            `I use projects as a way to learn. Whether it's picking up a new language, exploring a framework, or turning classroom theory into something tangible — building is how I internalize ideas. Most of what I make is for myself, to strengthen my understanding and push into areas I'm curious about.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              custom={0.15 + i * 0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-secondary leading-relaxed font-light"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Photo Placeholder */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[16/9] rounded-2xl bg-surface-alt border border-border flex items-center justify-center"
          >
            <p className="text-secondary text-sm">Headshot coming soon</p>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-primary"
          >
            Education
          </motion.h2>

          <div className="mt-14 space-y-12">
            {[
              {
                school: "University of Illinois at Urbana-Champaign",
                degree: "Master of Science in Computer Science",
                gpa: "4.00 / 4.00",
                dates: "Aug 2025 — Dec 2026",
                detail:
                  "Specializations in Artificial Intelligence and Data Science. Coursework in distributed systems, deep learning, NLP, and parallel programming.",
              },
              {
                school: "Loyola Marymount University",
                degree: "Bachelor of Science in Computer Science",
                gpa: "3.94 / 4.00",
                dates: "Aug 2020 — May 2024",
                detail:
                  "Los Angeles, CA. Foundation in systems programming, algorithms, and software engineering with undergraduate research in AI-driven storytelling.",
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium text-primary">
                    {edu.school}
                  </h3>
                  <span className="text-sm text-secondary">{edu.dates}</span>
                </div>
                <p className="mt-1 text-sm text-secondary">
                  {edu.degree} &middot; {edu.gpa}
                </p>
                <p className="mt-2 text-base text-secondary font-light leading-relaxed">
                  {edu.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Coursework */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-primary"
          >
            Coursework
          </motion.h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {coursework.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-6 py-3 rounded-full bg-surface-alt text-sm text-primary border border-border whitespace-nowrap"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-primary"
          >
            Technical Skills
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="text-xs font-medium uppercase tracking-widest text-secondary mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 rounded-full bg-surface-alt text-sm text-primary border border-border whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Code */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-primary"
          >
            Beyond the code
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Music Production",
                description:
                  "I produce R&B and Hip-Hop vocals in Ableton, building complex characters and stories through music. It's my creative outlet for exploring complicated ideas through a mix of fiction and truth.",
              },
              {
                title: "Game Development",
                description:
                  "Many of my undergrad projects were game-related — from working on Battlefield and Madden at EA to personal projects. I still enjoy tinkering with game dev on the side.",
              },
              {
                title: "Fitness",
                description:
                  "I train 3–5 times a week. Staying active keeps me sharp and balanced — it's as much a part of my routine as writing code.",
              },
            ].map((hobby, i) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-8 sm:p-10 rounded-2xl bg-surface-alt border border-border"
              >
                <h3 className="text-base font-medium text-primary">
                  {hobby.title}
                </h3>
                <p className="mt-4 text-sm text-secondary leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
