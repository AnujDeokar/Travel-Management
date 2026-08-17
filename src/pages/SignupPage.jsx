import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import './SignupPage.css'

export default function SignupPage() {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
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

    const { error: signUpError } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: { full_name: values.name },
      },
    })

    setLoading(false)

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    navigate('/trips')
  }

  return (
    <section className="page signup-page">
      <h1 className="page__title">Create your account</h1>
      <p className="page__subtitle">Save trips, get personalized recommendations.</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-form__field">
          Full name
          <input
            type="text"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </label>
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
            minLength="6"
            value={values.password}
            onChange={(e) => handleChange('password', e.target.value)}
            required
          />
        </label>

        {error && <p className="signup-form__error">{error}</p>}

        <button type="submit" className="signup-form__submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Sign up'}
        </button>

        <p className="signup-form__login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  )
}