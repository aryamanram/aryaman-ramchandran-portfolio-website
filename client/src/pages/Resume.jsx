import Navbar from "../Components/Navbar.jsx"

const Resume = () => {
  const education = [
    {
      school: "University of Illinois at Urbana-Champaign",
      degree: "Master of Science in Computer Science",
      gpa: "4.00 / 4.00",
      location: "Champaign, IL",
      date: "Aug 2025 – Dec 2026",
    },
    {
      school: "Loyola Marymount University",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.94 / 4.00",
      location: "Los Angeles, CA",
      date: "Aug 2020 – May 2024",
    },
  ]

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Turiyam AI",
      location: "Bengaluru, India",
      date: "May 2025 – Aug 2025",
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
      date: "Jan 2024 – May 2024",
      bullets: [
        "Prototyped CLI storytelling engine in Python integrating GPT-2/LLaMA via Transformers for agent planning and dialogue.",
        "Fine-tuned models with PyTorch, PEFT, and LoRA while leveraging Accelerate for distributed/mixed-precision training.",
        "Applied TRL (RLHF, preference optimization) to align agent behaviors and re-rank embeddings/reward models.",
        "Orchestrated multi-agent flows with LangGraph/Chain, FSMs (transitions), and asyncio for turn-based NPC concurrency.",
        "Persisted state using PostgreSQL, containerized experiments with Docker, and streamlined workflows with Typer.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Gotham City LA",
      location: "Burbank, CA",
      date: "May 2022 – Aug 2022",
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
      date: "Aug 2021 – Dec 2021",
      bullets: [
        "Optimized Battlefield 2042 rendering in C++ by profiling with Frostbite captures, PIX, SN Systems, Nsight, GPA, RGP, and RenderDoc, yielding a 3% framerate gain on Xbox/PlayStation under heavy memory load.",
        "Engineered Madden 23 opponent AI with finite-state machines and rule-based systems in C++/C#, enabling dynamic offensive and defensive formation selection.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Inhabitr",
      location: "Chicago, IL",
      date: "May 2021 – Aug 2021",
      bullets: [
        "Built Python queries to interface with PostgreSQL database for user requests.",
        "Restructured schema with 500+ SKUs to normalize product data and improve accessibility.",
        "Reduced query complexity from brute-force O(n) scans to O(log n) indexed lookups, significantly improving performance.",
      ],
    },
  ]

  const projects = [
    {
      name: "MTG CureAll",
      date: "Jun 2025 – Present",
      bullets: [
        "Built full-stack trading card app in Java/JavaScript with Amazon RDS/PostgreSQL managing 84k+ card records.",
        "Integrated Scryfall API for image recognition and TCGPlayer API for real-time market price tracking.",
        "Prototyped AI deck-building assistant using PyTorch, NumPy, and used GPT for natural language prompts.",
        "Tracked ML experiments with MLflow/W&B to compare metrics and persist model artifacts for reproducibility.",
      ],
    },
    {
      name: "MovieTime",
      date: "Jan 2025 – Aug 2025",
      bullets: [
        "Built full-stack movie booking app with Java/JavaScript, Express, and MongoDB backend.",
        "Integrated Clerk authentication and TMDB API for real-time movie listings.",
        "Designed admin portal for movie management with live database updates.",
      ],
    },
    {
      name: "Pacman Battler",
      date: "Jan 2024 – May 2024",
      bullets: [
        "Built Python simulation framework where reinforcement learning agents competed using custom reward functions.",
        "Implemented agent logic with finite-state machines and trained models using PyTorch + NumPy.",
        "Applied RL evaluation techniques to benchmark win rates and refine through reward shaping and environment tuning.",
      ],
    },
  ]

  const skills = {
    languages: "Python, C/C++, Java, SQL, Postgres, JavaScript, HTML/CSS",
    libraries: "PyTorch, NumPy, TensorFlow, AWS, Express, MongoDB, NodeJS, React, Git, Docker, Kubernetes, Postman",
    coursework: "ML for Software Engineering, Applied Machine Learning, Distributed Systems, Database Systems, Parallel Programming, Natural Language Processing, Algorithms and Analysis, Deep Learning, Reinforcement Learning, Computer Graphics, Linear Algebra",
  }

  const sectionStyle = {
    marginBottom: "2rem",
  }

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    borderBottom: "2px solid #95D5B2",
    paddingBottom: "0.5rem",
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "5rem", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Resume</h1>
          <a
            href="/pdfs/Aryaman Ramchandran Resume.pdf"
            download
            style={{
              backgroundColor: "#56AB91",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Download PDF
          </a>
        </div>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <strong>{edu.school}</strong>
                <span>{edu.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <span>{edu.degree} ({edu.gpa})</span>
                <span style={{ color: "#666" }}>{edu.location}</span>
              </div>
            </div>
          ))}
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <strong>{exp.title}</strong>
                <span>{exp.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ fontStyle: "italic" }}>{exp.company}</span>
                <span style={{ color: "#666" }}>{exp.location}</span>
              </div>
              <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: "0.25rem" }}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Projects</h2>
          {projects.map((proj, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <strong>{proj.name}</strong>
                <span>{proj.date}</span>
              </div>
              <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                {proj.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: "0.25rem" }}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Technical Skills</h2>
          <p><strong>Languages:</strong> {skills.languages}</p>
          <p><strong>Libraries / Software:</strong> {skills.libraries}</p>
          <p><strong>Relevant Coursework:</strong> {skills.coursework}</p>
        </section>
      </div>
    </>
  )
}

export default Resume
