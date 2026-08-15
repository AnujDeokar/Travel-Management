import './Navbar.css'

const links = ['Explore', 'Trips', 'Destinations', 'Journal', 'Contact']

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="/">
        <span className="navbar__mark" aria-hidden="true" />
        curiouscompass.in
      </a>

      <nav className="navbar__links" aria-label="Primary">
        {links.map((link, i) => (
          <a
            key={link}
            className={`navbar__link${i === 0 ? ' navbar__link--active' : ''}`}
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </nav>

      <button className="navbar__cta">Sign up</button>
    </header>
  )
}
