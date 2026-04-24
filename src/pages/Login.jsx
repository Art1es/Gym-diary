import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('gd_users') || '[]')
    const user = users.find(u => u.username === form.username && u.password === form.password)
    if (!user) { setError('Wrong username or password'); return }
    localStorage.setItem('gd_user', JSON.stringify(user))
    navigate('/')
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--bg)'
    }}>
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '400px'
      }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '0.25rem' }}>GYM DIARY</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Sign in to your account</p>

        {error && <p style={{ color: 'var(--danger)', marginBottom: '1rem' }}>{error}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input placeholder="Username" value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            style={inputStyle} />
          <input placeholder="Password" type="password" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            style={inputStyle} />
          <button onClick={handleSubmit} style={btnStyle}>Sign In</button>
        </div>

        <p style={{ color: 'var(--muted)', marginTop: '1.5rem', textAlign: 'center' }}>
          No account? <Link to="/register" style={{ color: 'var(--accent)' }}>Register</Link>
        </p>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)',
  background: 'var(--surface2)', color: 'var(--text)', fontSize: '1rem', outline: 'none'
}
const btnStyle = {
  padding: '0.875rem', borderRadius: '8px', border: 'none',
  background: 'var(--accent)', color: 'var(--bg)', fontSize: '1rem',
  fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif'
}