import { motion } from "framer-motion";
import { Download } from "lucide-react";
import resumePdf from "../assets/Aryaman Ramchandran Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Turiyam AI",
    location: "Bengaluru, India",
    dates: "May 2025 — Aug 2025",
    bullets: [
      "Built Python CLI to package kernels/metadata into UUID-structured S3 folders and streamlined uploads via AWS SDK.",
      "Implemented worker service that polled S3, claimed jobs, and updated state with in-progress/completed/failed metadata.",
      "Automated lifecycle with results/error logging for transparent, reproducible workflows.",
      "Developed PyTorch pipelines to synthesize large-scale kernel input datasets for stress-testing custom AI accelerators.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Loyola Marymount University",
    location: "Los Angeles, CA",
    dates: "Jan 2024 — May 2024",
    bullets: [
      "Prototyped CLI storytelling engine in Python integrating GPT-2/LLaMA via Transformers for agent planning and dialogue.",
      "Fine-tuned models with PyTorch, PEFT, and LoRA while leveraging Accelerate for distributed/mixed-precision training.",
      "Applied TRL (RLHF, preference optimization) to align agent behaviors and re-rank embeddings/reward models.",
      "Orchestrated multi-agent flows with LangGraph/Chain, FSMs, and asyncio for turn-based NPC concurrency.",
      "Persisted state using PostgreSQL, containerized experiments with Docker, and streamlined workflows with Typer.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Gotham City LA",
    location: "Burbank, CA",
    dates: "May 2022 — Aug 2022",
    bullets: [
      "Rebuilt public website with JavaScript, TypeScript, React, and TailwindCSS.",
      "Designed Java + Express backend for nonprofit request tracking, with data surfaced via an admin portal.",
      "Delivered MongoDB scheduling system managing ~50 employees across 20+ fundraising locations.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Electronic Arts (EA)",
    location: "Stockholm, Sweden",
    dates: "Aug 2021 — Dec 2021",
    bullets: [
      "Optimized Battlefield 2042 rendering in C++ by profiling with Frostbite captures, PIX, SN Systems, Nsight, GPA, RGP, and RenderDoc, yielding a 3% framerate gain on Xbox/PlayStation under heavy memory load.",
      "Engineered Madden 23 opponent AI with finite-state machines and rule-based systems in C++/C#, enabling dynamic offensive and defensive formation selection.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Inhabitr",
    location: "Chicago, IL",
    dates: "May 2021 — Aug 2021",
    bullets: [
      "Built Python queries to interface with PostgreSQL database for user requests.",
      "Restructured schema with 500+ SKUs to normalize product data and improve accessibility.",
      "Reduced query complexity from brute-force O(n) scans to O(log n) indexed lookups, significantly improving performance.",
    ],
  },
];

const education = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "Master of Science in Computer Science",
    gpa: "4.00 / 4.00",
    dates: "Aug 2025 — Dec 2026",
  },
  {
    school: "Loyola Marymount University",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.94 / 4.00",
    dates: "Aug 2020 — May 2024",
  },
];

const skills = {
  Languages: ["Python", "C/C++", "Java", "SQL", "PostgreSQL", "JavaScript", "HTML/CSS"],
  "ML & Data": ["PyTorch", "NumPy", "TensorFlow", "MLflow", "W&B"],
  "Systems & Cloud": ["AWS", "gRPC/Sockets", "Docker", "Kubernetes"],
  "Web & Backend": ["React", "Node.js", "Express", "MongoDB", "Git"],
  "AI Tools": ["GitHub Copilot", "Claude", "ChatGPT", "CodeRabbit"],
  Coursework: ["Distributed Systems", "Applied ML", "Database Systems", "Deep Learning", "NLP", "Parallel Programming"],
};

export default function Resume() {
  return (
    <div className="pt-52 pb-40">
      {/* Header */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-secondary text-sm tracking-widest uppercase mb-4"
            >
              Resume
            </motion.p>
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-primary"
            >
              Aryaman Ramchandran
            </motion.h1>
          </div>
          <motion.a
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            href={resumePdf}
            download="Aryaman Ramchandran Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white text-sm font-medium no-underline hover:bg-gray-800 transition-all duration-300 self-start sm:self-auto shrink-0"
          >
            <Download size={15} strokeWidth={2} />
            Download PDF
          </motion.a>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-10"
          >
            Education
          </motion.h2>

          <div className="space-y-10">
            {education.map((edu, i) => (
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
                  <span className="text-sm text-secondary shrink-0">
                    {edu.dates}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-secondary">
                  {edu.degree} &middot; {edu.gpa}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="h-px bg-border" />
      </div>

      {/* Experience */}
      <section className="px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-10"
          >
            Experience
          </motion.h2>

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.dates}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium text-primary">
                    {job.title}
                  </h3>
                  <span className="text-sm text-secondary shrink-0">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-secondary">
                  {job.company} &middot; {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[15px] text-secondary font-light leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="h-px bg-border" />
      </div>

      {/* Technical Skills */}
      <section className="px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-10"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-surface-alt text-sm text-primary border border-border whitespace-nowrap"
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
    </div>
  );
}
