import { motion } from "framer-motion";

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
    tags: ["Python", "AWS", "PyTorch", "S3"],
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
    tags: ["Python", "PyTorch", "LangGraph", "PostgreSQL", "Docker"],
    bullets: [
      "Prototyped CLI storytelling engine in Python integrating GPT-2/LLaMA via Transformers for agent planning and dialogue.",
      "Fine-tuned models with PyTorch, PEFT, and LoRA while leveraging Accelerate for distributed/mixed-precision training.",
      "Applied TRL (RLHF, preference optimization) to align agent behaviors and re-rank embeddings/reward models.",
      "Orchestrated multi-agent flows with LangGraph/Chain, FSMs, and asyncio for turn-based NPC concurrency.",
      "Persisted state using PostgreSQL, containerized experiments with Docker, and streamlined workflows with Typer.",
    ],
  },
  {
    title: "Coding Instructor",
    company: "CodeRev",
    location: "Los Angeles, CA",
    dates: "Summer 2022 & 2023",
    tags: ["Python", "Java", "C++", "Scratch", "Teaching"],
    bullets: [
      "Trained over 100 students across two summers in Python, Java, C++, and Scratch, adapting instruction to varying skill levels and backgrounds.",
      "Designed and iterated on teaching curriculum to effectively reach students ranging from first-time coders to advanced learners.",
      "Provided one-on-one tutoring for students who needed extra support as well as those showing exceptional aptitude.",
      "Communicated with parents through weekly performance reports to help guide their children's learning trajectory.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Gotham City LA",
    location: "Burbank, CA",
    dates: "May 2022 — Aug 2022",
    tags: ["JavaScript", "TypeScript", "React", "Java", "MongoDB"],
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
    tags: ["C++", "C#", "Frostbite", "Performance Profiling"],
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
    tags: ["Python", "PostgreSQL"],
    bullets: [
      "Built Python queries to interface with PostgreSQL database for user requests.",
      "Restructured schema with 500+ SKUs to normalize product data and improve accessibility.",
      "Reduced query complexity from brute-force O(n) scans to O(log n) indexed lookups, significantly improving performance.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="pt-52 pb-40">
      {/* Header */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-secondary text-sm tracking-widest uppercase mb-4"
          >
            Experience
          </motion.p>
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-primary"
          >
            Where I've worked.
          </motion.h1>
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-secondary font-light leading-relaxed max-w-2xl"
          >
            From game engines to AI accelerators — each role has shaped how I
            think about building software.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 mt-24">
        <div className="max-w-4xl mx-auto">
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
              className={`relative pl-8 pb-16 ${
                i < experience.length - 1
                  ? "border-l border-border"
                  : "border-l border-transparent"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-surface border-2 border-border" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-medium text-primary">
                  {job.title}
                </h3>
                <span className="text-sm text-secondary shrink-0">
                  {job.dates}
                </span>
              </div>

              <p className="mt-1.5 text-base text-secondary">
                {job.company} &middot; {job.location}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full bg-surface-alt text-xs text-secondary border border-border whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
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
      </section>
    </div>
  );
}
