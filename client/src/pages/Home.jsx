import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-14">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text"
          >
            Aryaman Ramchandran
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-accent/40" />
            <p className="text-sm sm:text-base tracking-[0.25em] uppercase text-text-secondary font-medium">
              Portfolio
            </p>
            <div className="h-px w-8 bg-accent/40" />
          </motion.div>
        </div>
      </main>
    </>
  )
}
