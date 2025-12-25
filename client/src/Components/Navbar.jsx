import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

function Navbar() {
  const location = useLocation()
  const itemRefs = useRef([])

  const navItems = [
    { label: 'Home', color: '#D8F3DC', href: '/' },
    { label: 'About', color: '#B7E4C7', href: '/about' },
    { label: 'Resume', color: '#95D5B2', href: '/resume' },
    { label: 'Projects', color: '#74C69D', href: '/projects' },
    { label: 'Contact', color: '#56AB91', href: '/contact' },
  ]

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.href === location.pathname)

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const isActive = index === activeIndex
        gsap.to(ref, {
          flexGrow: isActive ? 6 : 1,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
    })
  }, [location.pathname])

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div style={{ display: 'flex', width: '100%' }}>
        {navItems.map((item, index) => (
          <a
            key={item.label}
            ref={(el) => (itemRefs.current[index] = el)}
            href={item.href}
            style={{
              flexGrow: item.href === location.pathname ? 6 : 1,
              flexBasis: 0,
              backgroundColor: item.color,
              color: 'black',
              padding: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
