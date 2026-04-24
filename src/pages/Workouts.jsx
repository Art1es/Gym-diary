import { useState, useEffect } from 'react'

export default function Workouts() {
  const user = JSON.parse(localStorage.getItem('gd_user'))
  const key = `gd_workouts_${user.id}`

  const [workouts, setWorkouts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', date: new Date().toISOString().split('T')[0], exercises: [] })
  const [exForm, setExForm] = useState({ name: '', sets: '', reps: '', weight: '' })

  useEffect(() => {
    setWorkouts(JSON.parse(localStorage.getItem(key) || '[]').reverse())
  }, [])

  function save() {
    if (!form.name) return
    const all = JSON.parse(localStorage.getItem(key) || '[]')
    const newWorkout = { ...form, id: Date.now() }
    const updated = [...all, newWorkout]
    localStorage.setItem(key, JSON.stringify(updated))
    setWorkouts([...updated].reverse())
    setForm({ name: '', date: new Date().toISOString().split('T')[0], exercises: [] })
    setShowForm(false)
  }

  function addExercise() {
    if (!exForm.name) return
    setForm(f => ({ ...f, exercises: [...f.exercises, { ...exForm, id: Date.now() }] }))
    setExForm({ name: '', sets: '', reps: '', weight: '' })
  }

  function deleteWorkout(id) {
    const updated = JSON.parse(localStorage.getItem(key) || '[]').filter(w => w.id !== id)
    localStorage.setItem(key, JSON.stringify(updated))
    setWorkouts([...updated].reverse())
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '3rem' }}>WORKOUTS</h1>
          <p style={{ color: 'var(--muted)' }}>Track your training sessions</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={btnStyle}>
          {showForm ? 'Cancel' : '+ New Workout'}
        </button>
      </div>

      {showForm && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NEW WORKOUT</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <input placeholder="Workout name (e.g. Push Day)" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{ ...inputStyle, flex: 1 }} />
            <input type="date" value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              style={inputStyle} />
          </div>

          <h3 style={{ marginBottom: '0.75rem', color: 'var(--muted)' }}>EXERCISES</h3>
          {form.exercises.map(ex => (
            <div key={ex.id} style={{
              padding: '0.75rem', background: 'var(--surface2)', borderRadius: '8px',
              marginBottom: '0.5rem', display: 'flex', gap: '1rem'
            }}>
              <span style={{ flex: 1, fontWeight: '600' }}>{ex.name}</span>
              <span style={{ color: 'var(--muted)' }}>{ex.sets} sets × {ex.reps} reps</span>
              {ex.weight && <span style={{ color: 'var(--accent)' }}>{ex.weight} kg</span>}
            </div>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
            <input placeholder="Exercise name" value={exForm.name}
              onChange={e => setExForm({ ...exForm, name: e.target.value })}
              style={{ ...inputStyle, flex: 2, minWidth: '140px' }} />
            <input placeholder="Sets" value={exForm.sets} type="number"
              onChange={e => setExForm({ ...exForm, sets: e.target.value })}
              style={{ ...inputStyle, width: '80px' }} />
            <input placeholder="Reps" value={exForm.reps} type="number"
              onChange={e => setExForm({ ...exForm, reps: e.target.value })}
              style={{ ...inputStyle, width: '80px' }} />
            <input placeholder="kg" value={exForm.weight} type="number"
              onChange={e => setExForm({ ...exForm, weight: e.target.value })}
              style={{ ...inputStyle, width: '80px' }} />
            <button onClick={addExercise} style={{ ...btnStyle, background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              + Add
            </button>
          </div>

          <button onClick={save} style={{ ...btnStyle, marginTop: '1.5rem', width: '100%' }}>
            Save Workout
          </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {workouts.length === 0
          ? <p style={{ color: 'var(--muted)' }}>No workouts yet. Add your first one!</p>
          : workouts.map(w => (
            <div key={w.id} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem' }}>{w.name}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{w.date} · {w.exercises.length} exercises</p>
                </div>
                <button onClick={() => deleteWorkout(w.id)} style={{
                  background: 'transparent', border: '1px solid var(--border)',
                  color: 'var(--danger)', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer'
                }}>Delete</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {w.exercises.map(ex => (
                  <div key={ex.id} style={{
                    display: 'flex', gap: '1rem', padding: '0.625rem 0.875rem',
                    background: 'var(--surface2)', borderRadius: '8px'
                  }}>
                    <span style={{ flex: 1, fontWeight: '600' }}>{ex.name}</span>
                    <span style={{ color: 'var(--muted)' }}>{ex.sets} × {ex.reps}</span>
                    {ex.weight && <span style={{ color: 'var(--accent)', fontWeight: '600' }}>{ex.weight} kg</span>}
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)',
  background: 'var(--surface2)', color: 'var(--text)', fontSize: '1rem', outline: 'none'
}
const btnStyle = {
  padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none',
  background: 'var(--accent)', color: 'var(--bg)', fontSize: '1rem',
  fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif'
}