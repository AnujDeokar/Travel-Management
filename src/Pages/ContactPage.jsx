import { useState } from 'react'
import './ContactPage.css'

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'That email doesn\'t look right.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail would help — at least 10 characters.'
  }

  return errors
}

export default function ContactPage() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('success')
    }
  }

  function sendAnother() {
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setStatus('idle')
  }

  return (
    <section className="page contact-page">
      <h1 className="page__title">Contact us</h1>
      <p className="page__subtitle">Questions about a trip? Send us a note.</p>

      {status === 'success' ? (
        <div className="contact-page__success">
          <h3>Thanks — we'll get back to you soon.</h3>
          <p>We usually reply within a business day.</p>
          <button className="contact-form__submit" onClick={sendAnother}>
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-form__field">
            Name
            <input
              type="text"
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={errors.name ? 'contact-form__input--error' : ''}
            />
            {errors.name && <span className="contact-form__error">{errors.name}</span>}
          </label>

          <label className="contact-form__field">
            Email
            <input
              type="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={errors.email ? 'contact-form__input--error' : ''}
            />
            {errors.email && <span className="contact-form__error">{errors.email}</span>}
          </label>

          <label className="contact-form__field">
            Message
            <textarea
              rows="5"
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={errors.message ? 'contact-form__input--error' : ''}
            />
            {errors.message && <span className="contact-form__error">{errors.message}</span>}
          </label>

          <button type="submit" className="contact-form__submit">Send message</button>
        </form>
      )}
    </section>
  )
}