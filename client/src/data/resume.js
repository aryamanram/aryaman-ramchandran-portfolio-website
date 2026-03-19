export const education = [
  {
    school: 'University of Illinois at Urbana-Champaign',
    degree: 'Master of Science in Computer Science',
    gpa: '4.00 / 4.00',
    location: 'Champaign, IL',
    date: 'Aug 2025 – Dec 2026',
  },
  {
    school: 'Loyola Marymount University',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '3.94 / 4.00',
    location: 'Los Angeles, CA',
    date: 'Aug 2020 – May 2024',
  },
]

export const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'Turiyam AI',
    location: 'Bengaluru, India',
    date: 'May 2025 – Aug 2025',
    bullets: [
      'Built Python CLI to package kernels/metadata into UUID-structured S3 folders and streamlined uploads via AWS SDK.',
      'Implemented worker service that polled S3, claimed jobs, and updated state with in-progress/completed/failed metadata.',
      'Automated lifecycle with results/error logging for transparent, reproducible workflows.',
      'Developed PyTorch pipelines to synthesize large-scale kernel input datasets for stress-testing custom AI accelerators.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Loyola Marymount University',
    location: 'Los Angeles, CA',
    date: 'Jan 2024 – May 2024',
    bullets: [
      'Prototyped CLI storytelling engine in Python integrating GPT-2/LLaMA via Transformers for agent planning and dialogue.',
      'Fine-tuned models with PyTorch, PEFT, and LoRA while leveraging Accelerate for distributed/mixed-precision training.',
      'Applied TRL (RLHF, preference optimization) to align agent behaviors and re-rank embeddings/reward models.',
      'Orchestrated multi-agent flows with LangGraph/Chain, FSMs (transitions), and asyncio for turn-based NPC concurrency.',
      'Persisted state using PostgreSQL, containerized experiments with Docker, and streamlined workflows with Typer.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Gotham City LA',
    location: 'Burbank, CA',
    date: 'May 2022 – Aug 2022',
    bullets: [
      'Rebuilt public website with JavaScript, TypeScript, React, and TailwindCSS.',
      'Designed Java + Express backend for nonprofit request tracking, with data surfaced via an admin portal.',
      'Delivered MongoDB scheduling system managing ~50 employees across 20+ fundraising locations.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Electronic Arts (EA)',
    location: 'Stockholm, Sweden',
    date: 'Aug 2021 – Dec 2021',
    bullets: [
      'Optimized Battlefield 2042 rendering in C++ by profiling with Frostbite captures, PIX, SN Systems, Nsight, GPA, RGP, and RenderDoc, yielding a 3% framerate gain on Xbox/PlayStation under heavy memory load.',
      'Engineered Madden 23 opponent AI with finite-state machines and rule-based systems in C++/C#, enabling dynamic offensive and defensive formation selection.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Inhabitr',
    location: 'Chicago, IL',
    date: 'May 2021 – Aug 2021',
    bullets: [
      'Built Python queries to interface with PostgreSQL database for user requests.',
      'Restructured schema with 500+ SKUs to normalize product data and improve accessibility.',
      'Reduced query complexity from brute-force O(n) scans to O(log n) indexed lookups, significantly improving performance.',
    ],
  },
]

export const skills = {
  languages: 'Python, C/C++, Java, SQL, Postgres, JavaScript, HTML/CSS',
  libraries: 'PyTorch, NumPy, TensorFlow, AWS, Express, MongoDB, NodeJS, React, Git, Docker, Kubernetes, Postman',
  coursework: 'ML for Software Engineering, Applied Machine Learning, Distributed Systems, Database Systems, Parallel Programming, Natural Language Processing, Algorithms and Analysis, Deep Learning, Reinforcement Learning, Computer Graphics, Linear Algebra',
}
