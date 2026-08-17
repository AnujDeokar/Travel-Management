import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const links = [
  { label: 'Explore', to: '/' },
  { label: 'Trips', to: '/trips' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

function getFirstName(user) {
  const fullName = user?.user_metadata?.full_name
  if (fullName) return fullName.trim().split(' ')[0]
  return user?.email?.split('@')[0] ?? 'there'
}

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    setMenuOpen(false)
    navigate('/')
  }

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

        {user ? (
          <button className="navbar__cta navbar__cta--mobile" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <>
            <NavLink className="navbar__cta navbar__cta--outline navbar__cta--mobile" to="/login" onClick={() => setMenuOpen(false)}>
              Sign in
            </NavLink>
            <NavLink className="navbar__cta navbar__cta--mobile" to="/signup" onClick={() => setMenuOpen(false)}>
              Sign up
            </NavLink>
          </>
        )}
      </nav>

      {user ? (
        <div className="navbar__account navbar__cta--desktop">
          <span className="navbar__welcome">Welcome, {getFirstName(user)}!</span>
          <button className="navbar__cta" onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div className="navbar__cta--desktop navbar__auth-buttons">
          <NavLink className="navbar__cta navbar__cta--outline" to="/login">
            Sign in
          </NavLink>
          <NavLink className="navbar__cta" to="/signup">
            Sign up
          </NavLink>
        </div>
      )}

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