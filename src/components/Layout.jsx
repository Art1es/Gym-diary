import { Outlet, NavLink, useNavigate } from 'react-router-dom'

export default function Layout() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('gd_user'))

  function logout() {
    localStorage.removeItem('gd_user')
    navigate('/login')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{
        width: '220px', background: 'var(--surface)', borderRight: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', padding: '2rem 1rem', gap: '0.5rem', position: 'fixed', height: '100vh'
      }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '2rem' }}>GYM<br/>DIARY</h1>

        {[
          { to: '/', label: '🏠 Dashboard' },
          { to: '/workouts', label: '💪 Workouts' },
          { to: '/programs', label: '📋 Programs' },
          { to: '/guides', label: '📖 Guides' },
        ].map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === '/'} style={({ isActive }) => ({
            padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none',
            color: isActive ? 'var(--bg)' : 'var(--text)',
            background: isActive ? 'var(--accent)' : 'transparent',
            fontWeight: '600', transition: 'all 0.2s'
          })}>
            {label}
          </NavLink>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            {user?.username}
          </p>
          <button onClick={logout} style={{
            width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)',
            background: 'transparent', color: 'var(--danger)', cursor: 'pointer', fontWeight: '600'
          }}>
            Logout
          </button>
        </div>
      </nav>

      <main style={{ marginLeft: '220px', flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}