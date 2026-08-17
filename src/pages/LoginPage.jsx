import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import './SignupPage.css'

export default function LoginPage() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    setLoading(false)

    if (signInError) {
      setError(signInError.message)
      return
    }

    navigate('/trips')
  }

  return (
    <section className="page signup-page">
      <h1 className="page__title">Log in</h1>
      <p className="page__subtitle">Welcome back.</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-form__field">
          Email
          <input
            type="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </label>
        <label className="signup-form__field">
          Password
          <input
            type="password"
            value={values.password}
            onChange={(e) => handleChange('password', e.target.value)}
            required
          />
        </label>

        {error && <p className="signup-form__error">{error}</p>}

        <button type="submit" className="signup-form__submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>

        <p className="signup-form__login-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </section>
  )
}