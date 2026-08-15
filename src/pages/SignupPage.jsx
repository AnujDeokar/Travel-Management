import { useState } from 'react'
import './SignupPage.css'

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page signup-page">
      <h1 className="page__title">Create your account</h1>
      <p className="page__subtitle">Save trips, get personalized recommendations.</p>

      {submitted ? (
        <p className="signup-page__success">Welcome aboard — check your email to confirm.</p>
      ) : (
        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="signup-form__field">
            Full name
            <input type="text" required />
          </label>
          <label className="signup-form__field">
            Email
            <input type="email" required />
          </label>
          <label className="signup-form__field">
            Password
            <input type="password" minLength="8" required />
          </label>
          <button type="submit" className="signup-form__submit">Sign up</button>
        </form>
      )}
    </section>
  )
}