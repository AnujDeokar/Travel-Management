import './Hero.css'

export default function Hero() {
  function scrollToDestinations() {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Explore</h1>
        <p className="hero__subtitle">
          Discover new, incredible places worth the search
        </p>

        <div className="hero__actions">
          <button className="hero__button hero__button--primary" onClick={scrollToDestinations}>
            Explore
          </button>
          <a className="hero__button hero__button--secondary" href="/book">
            Book a trip
          </a>
        </div>
      </div>
    </section>
  )
}