import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page contact-page">
      <h1 className="page__title">Contact us</h1>
      <p className="page__subtitle">Questions about a trip? Send us a note.</p>

      {submitted ? (
        <p className="contact-page__success">Thanks — we'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-form__field">
            Name
            <input type="text" required />
          </label>
          <label className="contact-form__field">
            Email
            <input type="email" required />
          </label>
          <label className="contact-form__field">
            Message
            <textarea rows="5" required />
          </label>
          <button type="submit" className="contact-form__submit">Send message</button>
        </form>
      )}
    </section>
  )
}