import { NavLink } from 'react-router-dom'

const navLinks = [
    { name: 'Home', path: '/' },
    // Add future pages here, e.g.:
    // { name: 'About', path: '/about' },
    // { name: 'Projects', path: '/projects' },
    // { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4">
            <div className="text-white text-xl font-bold">
                Aryaman
            </div>
            <ul className="flex gap-6">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `text-white hover:text-gray-300 transition-colors ${isActive ? 'border-b-2 border-white' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
