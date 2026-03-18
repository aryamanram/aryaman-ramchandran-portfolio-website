import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy"
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-accent" />

      <div className="flex items-center justify-between px-6 h-14">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="font-display text-[15px] font-semibold tracking-tight text-text-inverse">
            Aryaman Ramchandran
          </span>
          <span className="text-text-tertiary text-[13px] font-light hidden sm:inline">
            |
          </span>
          <span className="text-text-tertiary text-[13px] hidden sm:inline">
            Portfolio
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to

            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    relative px-3 py-1.5 rounded text-[13px] font-medium no-underline transition-colors duration-150
                    ${isActive
                      ? 'text-text-inverse bg-navy-light'
                      : 'text-text-tertiary hover:text-text-inverse hover:bg-navy-light/50'
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[11px] left-3 right-3 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}
