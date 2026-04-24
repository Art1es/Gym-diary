import { useState } from 'react'

const programs = [

  {
    id: 1,
    name: 'Push / Pull / Legs',
    level: 'Intermediate',
    days: 6,
    description: 'Classic 6-day split targeting each muscle group twice per week.',
    schedule: [
      {
        day: 'Day 1 — Push',
        exercises: [
          { name: 'Bench Press', sets: 4, reps: '6-8', weight: 'Heavy' },
          { name: 'Overhead Press', sets: 3, reps: '8-10', weight: 'Moderate' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', weight: 'Moderate' },
          { name: 'Lateral Raises', sets: 4, reps: '12-15', weight: 'Light' },
          { name: 'Tricep Pushdowns', sets: 3, reps: '12-15', weight: 'Light' },
        ]
      },
      {
        day: 'Day 2 — Pull',
        exercises: [
          { name: 'Deadlift', sets: 4, reps: '5', weight: 'Heavy' },
          { name: 'Pull-Ups', sets: 4, reps: '6-10', weight: 'Bodyweight' },
          { name: 'Barbell Row', sets: 3, reps: '8-10', weight: 'Moderate' },
          { name: 'Face Pulls', sets: 3, reps: '15-20', weight: 'Light' },
          { name: 'Bicep Curls', sets: 3, reps: '12-15', weight: 'Light' },
        ]
      },
      {
        day: 'Day 3 — Legs',
        exercises: [
          { name: 'Squat', sets: 4, reps: '6-8', weight: 'Heavy' },
          { name: 'Romanian Deadlift', sets: 3, reps: '10-12', weight: 'Moderate' },
          { name: 'Leg Press', sets: 3, reps: '12-15', weight: 'Moderate' },
          { name: 'Leg Curl', sets: 3, reps: '12-15', weight: 'Light' },
          { name: 'Calf Raises', sets: 4, reps: '15-20', weight: 'Light' },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'Full Body 3x',
    level: 'Beginner',
    days: 3,
    description: 'Train 3 days a week hitting every muscle group each session. Perfect for beginners.',
    schedule: [
      {
        day: 'Day A',
        exercises: [
          { name: 'Squat', sets: 3, reps: '5', weight: 'Progressive' },
          { name: 'Bench Press', sets: 3, reps: '5', weight: 'Progressive' },
          { name: 'Barbell Row', sets: 3, reps: '5', weight: 'Progressive' },
        ]
      },
      {
        day: 'Day B',
        exercises: [
          { name: 'Squat', sets: 3, reps: '5', weight: 'Progressive' },
          { name: 'Overhead Press', sets: 3, reps: '5', weight: 'Progressive' },
          { name: 'Deadlift', sets: 1, reps: '5', weight: 'Progressive' },
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'Upper / Lower Split',
    level: 'Intermediate',
    days: 4,
    description: '4-day split alternating upper and lower body sessions.',
    schedule: [
      {
        day: 'Upper A (Strength)',
        exercises: [
          { name: 'Bench Press', sets: 4, reps: '4-6', weight: 'Heavy' },
          { name: 'Barbell Row', sets: 4, reps: '4-6', weight: 'Heavy' },
          { name: 'Overhead Press', sets: 3, reps: '6-8', weight: 'Moderate' },
          { name: 'Pull-Ups', sets: 3, reps: '6-8', weight: 'Bodyweight' },
        ]
      },
      {
        day: 'Lower A (Strength)',
        exercises: [
          { name: 'Squat', sets: 4, reps: '4-6', weight: 'Heavy' },
          { name: 'Romanian Deadlift', sets: 3, reps: '6-8', weight: 'Moderate' },
          { name: 'Leg Press', sets: 3, reps: '8-10', weight: 'Moderate' },
          { name: 'Calf Raises', sets: 4, reps: '10-15', weight: 'Light' },
        ]
      },
      {
        day: 'Upper B (Hypertrophy)',
        exercises: [
          { name: 'Incline Dumbbell Press', sets: 4, reps: '8-12', weight: 'Moderate' },
          { name: 'Cable Row', sets: 4, reps: '8-12', weight: 'Moderate' },
          { name: 'Lateral Raises', sets: 4, reps: '12-15', weight: 'Light' },
          { name: 'Bicep Curls', sets: 3, reps: '12-15', weight: 'Light' },
          { name: 'Tricep Pushdowns', sets: 3, reps: '12-15', weight: 'Light' },
        ]
      },
      {
        day: 'Lower B (Hypertrophy)',
        exercises: [
          { name: 'Leg Press', sets: 4, reps: '10-15', weight: 'Moderate' },
          { name: 'Leg Curl', sets: 4, reps: '10-15', weight: 'Light' },
          { name: 'Bulgarian Split Squat', sets: 3, reps: '10-12', weight: 'Light' },
          { name: 'Calf Raises', sets: 4, reps: '15-20', weight: 'Light' },
        ]
      },
    ]
  },
]

const levelColor = { Beginner: '#4ade80', Intermediate: '#facc15', Advanced: '#f87171' }

export default function Programs() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>PROGRAMS</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Choose a training program that fits your level</p>

      {!selected ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {programs.map(p => (
            <div key={p.id} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.5rem', cursor: 'pointer',
              transition: 'border-color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              onClick={() => setSelected(p)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>{p.name}</h2>
                <span style={{
                  background: levelColor[p.level] + '22', color: levelColor[p.level],
                  padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600', whiteSpace: 'nowrap'
                }}>{p.level}</span>
              </div>
              <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>{p.description}</p>
              <p style={{ color: 'var(--accent)', fontFamily: 'Bebas Neue', fontSize: '1.25rem' }}>{p.days} DAYS / WEEK</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelected(null)} style={{
            background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
            borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '1.5rem'
          }}>← Back</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <h1 style={{ fontSize: '2.5rem' }}>{selected.name}</h1>
            <span style={{
              background: levelColor[selected.level] + '22', color: levelColor[selected.level],
              padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '600'
            }}>{selected.level}</span>
          </div>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>{selected.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {selected.schedule.map((day, i) => (
              <div key={i} style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem'
              }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>{day.day}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {day.exercises.map((ex, j) => (
                    <div key={j} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.75rem 1rem', background: 'var(--surface2)', borderRadius: '8px'
                    }}>
                      <span style={{ fontWeight: '600' }}>{ex.name}</span>
                      <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                        <span>{ex.sets} sets × {ex.reps} reps</span>
                        <span style={{ color: 'var(--accent)' }}>{ex.weight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}