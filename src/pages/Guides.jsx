import { useState } from 'react'

const guides = [
  {
    id: 1,
    name: 'Barbell Squat',
    muscle: 'Legs',
    difficulty: 'Intermediate',
    emoji: '🦵',
    steps: [
      'Stand with feet shoulder-width apart, bar resting on your upper traps.',
      'Take a deep breath and brace your core before descending.',
      'Push your knees out in line with your toes as you squat down.',
      'Descend until your hips are at or below parallel.',
      'Drive through your heels to stand back up, keeping your chest tall.',
    ],
    tips: [
      'Keep your heels flat on the floor throughout the movement.',
      'Don\'t let your knees cave inward — push them out.',
      'Look slightly upward to keep your spine neutral.',
    ],
    mistakes: [
      'Rounding the lower back at the bottom.',
      'Rising on your toes instead of driving through heels.',
      'Knees caving inward under heavy load.',
    ]
  },
  {
    id: 2,
    name: 'Bench Press',
    muscle: 'Chest',
    difficulty: 'Beginner',
    emoji: '💪',
    steps: [
      'Lie flat on the bench with your eyes under the bar.',
      'Grip the bar slightly wider than shoulder-width.',
      'Retract your shoulder blades and plant your feet firmly on the floor.',
      'Unrack the bar and lower it to your lower chest in a controlled manner.',
      'Press the bar back up explosively, locking out at the top.',
    ],
    tips: [
      'Keep your wrists straight — don\'t let them bend back.',
      'Touch the bar to your chest every rep for full range of motion.',
      'Maintain a slight arch in your lower back.',
    ],
    mistakes: [
      'Flaring elbows out at 90° — keep them at ~45°.',
      'Bouncing the bar off your chest.',
      'Lifting your feet off the floor.',
    ]
  },
  {
    id: 3,
    name: 'Deadlift',
    muscle: 'Back / Legs',
    difficulty: 'Intermediate',
    emoji: '🏋️',
    steps: [
      'Stand with the bar over your mid-foot, feet hip-width apart.',
      'Hinge at the hips and grip the bar just outside your legs.',
      'Lower your hips, lift your chest, and take a deep breath.',
      'Push the floor away with your legs while keeping the bar close to your body.',
      'Lock out at the top by squeezing your glutes and standing tall.',
    ],
    tips: [
      'The bar should drag up your shins — keep it close.',
      'Think "push the floor" not "pull the bar".',
      'Engage your lats before lifting to protect your back.',
    ],
    mistakes: [
      'Rounding the upper or lower back.',
      'Letting the bar drift away from your body.',
      'Jerking the bar off the floor — start slow.',
    ]
  },
  {
    id: 4,
    name: 'Overhead Press',
    muscle: 'Shoulders',
    difficulty: 'Intermediate',
    emoji: '🙌',
    steps: [
      'Stand with feet hip-width apart, bar resting on your front deltoids.',
      'Grip just outside shoulder-width, elbows slightly forward.',
      'Brace your core and glutes before pressing.',
      'Press the bar straight up, moving your head back slightly to clear it.',
      'Once the bar passes your head, push it back to centre over your spine.',
    ],
    tips: [
      'Lock your entire body — don\'t use your legs to push.',
      'Squeeze your glutes to prevent lower back arching.',
      'The bar path should be a straight vertical line.',
    ],
    mistakes: [
      'Leaning back excessively — this stresses the lower back.',
      'Pressing the bar forward instead of straight up.',
      'Flaring elbows too wide at the start.',
    ]
  },
  {
    id: 5,
    name: 'Pull-Up',
    muscle: 'Back / Biceps',
    difficulty: 'Beginner',
    emoji: '🔝',
    steps: [
      'Hang from the bar with an overhand grip, slightly wider than shoulders.',
      'Depress your shoulder blades — don\'t shrug up.',
      'Pull your elbows down and back to bring your chest to the bar.',
      'Pause briefly at the top, then lower yourself with control.',
      'Fully extend your arms at the bottom before the next rep.',
    ],
    tips: [
      'Lead with your chest, not your chin.',
      'Squeeze your lats at the top of every rep.',
      'Avoid swinging — keep the movement strict.',
    ],
    mistakes: [
      'Using momentum and kipping.',
      'Not reaching full extension at the bottom.',
      'Pulling with biceps only — engage your back.',
    ]
  },
  {
    id: 6,
    name: 'Romanian Deadlift',
    muscle: 'Hamstrings / Glutes',
    difficulty: 'Beginner',
    emoji: '🍑',
    steps: [
      'Stand holding the bar at hip height, feet hip-width apart.',
      'Push your hips back while keeping a slight bend in your knees.',
      'Lower the bar along your legs, feeling a stretch in your hamstrings.',
      'Stop when your back is parallel to the floor or you feel a strong stretch.',
      'Drive your hips forward to return to standing.',
    ],
    tips: [
      'This is a hip hinge, not a squat — minimal knee bend.',
      'Keep the bar close to your legs throughout.',
      'Focus on feeling the stretch in your hamstrings.',
    ],
    mistakes: [
      'Rounding the lower back — keep it flat.',
      'Bending the knees too much — turns it into a squat.',
      'Going too heavy before mastering the hinge.',
    ]
  },
]

const muscleColors = {
  Legs: '#818cf8', Chest: '#f472b6', 'Back / Legs': '#fb923c',
  Shoulders: '#4ade80', 'Back / Biceps': '#38bdf8', 'Hamstrings / Glutes': '#a78bfa'
}

export default function Guides() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const muscles = ['All', ...new Set(guides.map(g => g.muscle))]
  const filtered = filter === 'All' ? guides : guides.filter(g => g.muscle === filter)

  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>EXERCISE GUIDES</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Learn proper technique for the fundamental lifts</p>

      {!selected ? (
        <>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {muscles.map(m => (
              <button key={m} onClick={() => setFilter(m)} style={{
                padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid var(--border)',
                background: filter === m ? 'var(--accent)' : 'var(--surface)',
                color: filter === m ? 'var(--bg)' : 'var(--text)',
                cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem',
                fontFamily: 'DM Sans, sans-serif'
              }}>{m}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {filtered.map(g => (
              <div key={g.id} onClick={() => setSelected(g)} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.5rem', cursor: 'pointer', transition: 'border-color 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{g.emoji}</div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{g.name}</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{
                    background: (muscleColors[g.muscle] || '#888') + '22',
                    color: muscleColors[g.muscle] || '#888',
                    padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600'
                  }}>{g.muscle}</span>
                  <span style={{
                    background: 'var(--surface2)', color: 'var(--muted)',
                    padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem'
                  }}>{g.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setSelected(null)} style={{
            background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)',
            borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '1.5rem',
            fontFamily: 'DM Sans, sans-serif'
          }}>← Back</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '3rem' }}>{selected.emoji}</span>
            <div>
              <h1 style={{ fontSize: '2.5rem' }}>{selected.name}</h1>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                <span style={{
                  background: (muscleColors[selected.muscle] || '#888') + '22',
                  color: muscleColors[selected.muscle] || '#888',
                  padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600'
                }}>{selected.muscle}</span>
                <span style={{
                  background: 'var(--surface2)', color: 'var(--muted)',
                  padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.8rem'
                }}>{selected.difficulty}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>HOW TO PERFORM</h2>
              {selected.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    minWidth: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent)',
                    color: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '0.85rem', flexShrink: 0
                  }}>{i + 1}</span>
                  <p style={{ color: 'var(--text)', lineHeight: 1.6 }}>{step}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#4ade80', marginBottom: '1rem' }}>✅ PRO TIPS</h2>
              {selected.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#4ade80', flexShrink: 0 }}>→</span>
                  <p style={{ color: 'var(--text)', lineHeight: 1.5, fontSize: '0.95rem' }}>{tip}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--danger)', marginBottom: '1rem' }}>❌ COMMON MISTAKES</h2>
              {selected.mistakes.map((mistake, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--danger)', flexShrink: 0 }}>✗</span>
                  <p style={{ color: 'var(--text)', lineHeight: 1.5, fontSize: '0.95rem' }}>{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}