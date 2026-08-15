import Navbar from './Navbar'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Replace .hero background in Hero.css with a real photo when you have one:
          background-image: linear-gradient(...), url('/images/hero.jpg'); */}
      <Navbar />

      <div className="hero__content">
        <h1 className="hero__title">Explore</h1>
        <p className="hero__subtitle">
          Discover new, incredible places worth the search
        </p>

        <div className="hero__actions">
          <button className="hero__button hero__button--primary">Explore</button>
          <button className="hero__button hero__button--secondary">Book a trip</button>
        </div>
      </div>
    </section>
  )
}
