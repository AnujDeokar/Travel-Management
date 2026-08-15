import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Explore', to: '/' },
  { label: 'Trips', to: '/trips' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`navbar${isHome ? '' : ' navbar--solid'}${menuOpen ? ' navbar--menu-open' : ''}`}>
      <NavLink className="navbar__brand" to="/" onClick={() => setMenuOpen(false)}>
        <span className="navbar__mark" aria-hidden="true" />
        curiouscompass.in
      </NavLink>

      <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `navbar__link${isActive ? ' navbar__link--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink className="navbar__cta navbar__cta--mobile" to="/signup" onClick={() => setMenuOpen(false)}>
          Sign up
        </NavLink>
      </nav>

      <NavLink className="navbar__cta navbar__cta--desktop" to="/signup">
        Sign up
      </NavLink>

      <button
        className="navbar__toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}