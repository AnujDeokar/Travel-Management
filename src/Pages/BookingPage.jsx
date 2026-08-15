import { useState } from 'react'
import './BookingPage.css'

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page booking-page">
      <h1 className="page__title">Book a trip</h1>
      <p className="page__subtitle">Tell us roughly what you have in mind — we'll follow up with options.</p>

      {submitted ? (
        <p className="booking-page__success">Got it — we'll be in touch with options shortly.</p>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label className="booking-form__field">
            Destination
            <input type="text" placeholder="e.g. Maldives" required />
          </label>
          <div className="booking-form__row">
            <label className="booking-form__field">
              Departure date
              <input type="date" required />
            </label>
            <label className="booking-form__field">
              Return date
              <input type="date" required />
            </label>
          </div>
          <label className="booking-form__field">
            Travelers
            <input type="number" min="1" defaultValue="1" required />
          </label>
          <button type="submit" className="booking-form__submit">Request booking</button>
        </form>
      )}
    </section>
  )
}