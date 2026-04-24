import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('gd_user'))
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem(`gd_workouts_${user.id}`) || '[]')
    setWorkouts(all.slice(-3).reverse())
  }, [])

  const stats = {
    total: JSON.parse(localStorage.getItem(`gd_workouts_${user.id}`) || '[]').length,
    thisWeek: JSON.parse(localStorage.getItem(`gd_workouts_${user.id}`) || '[]').filter(w => {
      const d = new Date(w.date)
      const now = new Date()
      const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
      return d >= weekAgo
    }).length
  }

  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>
        WELCOME BACK, <span style={{ color: 'var(--accent)' }}>{user.username.toUpperCase()}</span>
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Here's your progress overview</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Workouts', value: stats.total },
          { label: 'This Week', value: stats.thisWeek },
          { label: 'Streak', value: `${stats.thisWeek > 0 ? '🔥' : '❄️'} ${stats.thisWeek} days` },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '1.5rem'
          }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{label}</p>
            <p style={{ fontSize: '2rem', fontFamily: 'Bebas Neue', color: 'var(--accent)' }}>{value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>RECENT WORKOUTS</h2>
          {workouts.length === 0
            ? <p style={{ color: 'var(--muted)' }}>No workouts yet. <Link to="/workouts" style={{ color: 'var(--accent)' }}>Add one!</Link></p>
            : workouts.map(w => (
              <div key={w.id} style={{
                padding: '0.75rem', borderRadius: '8px', background: 'var(--surface2)',
                marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between'
              }}>
                <span style={{ fontWeight: '600' }}>{w.name}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{w.date}</span>
              </div>
            ))
          }
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>QUICK ACTIONS</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { to: '/workouts', label: '💪 Log a Workout', },
              { to: '/programs', label: '📋 Browse Programs' },
              { to: '/guides', label: '📖 Exercise Guides' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{
                padding: '0.875rem 1rem', borderRadius: '8px', background: 'var(--surface2)',
                border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none',
                fontWeight: '600', transition: 'border-color 0.2s'
              }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}