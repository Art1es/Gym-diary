import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirm) { setError('Passwords do not match'); return }
    if (form.username.length < 3) { setError('Username must be at least 3 characters'); return }
    const users = JSON.parse(localStorage.getItem('gd_users') || '[]')
    if (users.find(u => u.username === form.username)) { setError('Username already taken'); return }
    const newUser = { id: Date.now(), username: form.username, password: form.password }
    localStorage.setItem('gd_users', JSON.stringify([...users, newUser]))
    localStorage.setItem('gd_user', JSON.stringify(newUser))
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
        <h1 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '0.25rem' }}>CREATE ACCOUNT</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Start tracking your progress</p>

        {error && <p style={{ color: 'var(--danger)', marginBottom: '1rem' }}>{error}</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input placeholder="Username" value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            style={inputStyle} />
          <input placeholder="Password" type="password" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            style={inputStyle} />
          <input placeholder="Confirm Password" type="password" value={form.confirm}
            onChange={e => setForm({ ...form, confirm: e.target.value })}
            style={inputStyle} />
          <button onClick={handleSubmit} style={btnStyle}>Register</button>
        </div>

        <p style={{ color: 'var(--muted)', marginTop: '1.5rem', textAlign: 'center' }}>
          Have an account? <Link to="/login" style={{ color: 'var(--accent)' }}>Sign in</Link>
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