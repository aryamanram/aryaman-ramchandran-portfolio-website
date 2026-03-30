import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6"
      >
        {/* Subtle gradient orb - Apple-style ambient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/40 via-purple-50/20 to-transparent blur-3xl" />
        </div>

        <div className="relative text-center max-w-3xl">
          {/* Greeting */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-secondary text-sm tracking-widest uppercase mb-4"
          >
            Software Engineer
          </motion.p>

          {/* Name - Apple-style large, thin headline */}
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[1.05] text-primary"
          >
            Aryaman
            <br />
            <span className="bg-gradient-to-r from-primary via-gray-600 to-secondary bg-clip-text text-transparent">
              Ramchandran
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg sm:text-xl text-secondary max-w-xl mx-auto leading-relaxed font-light"
          >
            MS Computer Science @ UIUC. Building at the intersection of
            systems, machine learning, and elegant software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white text-sm font-medium no-underline hover:bg-gray-800 transition-all duration-300"
            >
              Explore Projects
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-primary text-sm font-medium no-underline hover:bg-surface-alt transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center justify-center gap-6"
          >
            {[
              { label: "GitHub", href: "https://github.com/aryamanramchandran" },
              { label: "LinkedIn", href: "https://linkedin.com/in/aryamanramchandran" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary text-sm transition-colors duration-300 no-underline"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-secondary" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Intro / About Preview Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.15] text-primary"
          >
            Driven by curiosity for{" "}
            <span className="text-secondary">complex systems</span> and a passion for{" "}
            <span className="text-secondary">elegant solutions</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 text-lg text-secondary leading-relaxed font-light"
          >
            From low-level systems work to full-stack applications, I'm drawn
            to problems that demand both depth and precision. Currently
            pursuing my Masters at the University of Illinois Urbana-Champaign,
            with experience at EA, Turiyam AI, and more.
          </motion.p>

          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-1 mt-8 text-accent text-sm font-medium no-underline hover:underline underline-offset-4"
          >
            Learn more about me
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </motion.a>
        </div>
      </section>

      {/* Highlights / Stats Strip */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0 sm:divide-x sm:divide-border">
            {[
              { number: "4.0", label: "GPA at UIUC" },
              { number: "4+", label: "Years of Experience" },
              { number: "10+", label: "Personal Projects" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center px-8"
              >
                <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-secondary tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer teaser */}
      <section className="py-32 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-primary"
        >
          See what I've been working on.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm font-medium no-underline hover:bg-accent-hover transition-all duration-300"
          >
            Browse Projects
          </a>
        </motion.div>
      </section>
    </>
  );
}
