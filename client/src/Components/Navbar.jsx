function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1.5rem', zIndex: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'black' }}>AR</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: 'black' }}>Home</a>
          <a href="/work" style={{ color: 'black' }}>Work</a>
          <a href="/about" style={{ color: 'black' }}>About</a>
          <a href="/contact" style={{ color: 'black' }}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
