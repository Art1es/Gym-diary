# 🏋️ Gym Diary

A web application for tracking gym workouts. Built with React and Vite.

## Features

- **Authentication** — register and log in, each user sees only their own data
- **Workout Log** — create training sessions with exercises, sets, reps and weight
- **Training Programs** — 3 ready-made programs for different experience levels
- **Exercise Guides** — step-by-step technique guides for 6 fundamental lifts with tips and common mistakes
- **Dashboard** — overview of total workouts and weekly activity

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- localStorage — data persistence (per user, isolated by user ID)

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/gym-diary.git

# Navigate to the project folder
cd gym-diary

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
gym-diary/
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Router + route protection
    ├── index.css         # Global styles and CSS variables
    ├── components/
    │   └── Layout.jsx    # Sidebar navigation wrapper
    └── pages/
        ├── Login.jsx
        ├── Register.jsx
        ├── Dashboard.jsx
        ├── Workouts.jsx
        ├── Programs.jsx
        └── Guides.jsx
```

## How Data is Stored

All data is stored in the browser's `localStorage` using JSON:

| Key | Contents |
|-----|----------|
| `gd_users` | Array of all registered users |
| `gd_user` | Currently logged-in user (session) |
| `gd_workouts_{userId}` | Workout history for a specific user |

## Training Programs

| Program | Level | Days/Week |
|---------|-------|-----------|
| Full Body 3x | Beginner | 3 |
| Upper / Lower Split | Intermediate | 4 |
| Push / Pull / Legs | Intermediate | 6 |

## Roadmap

- [ ] Connect Java Spring Boot backend (REST API + database)
- [ ] Progress charts (weight over time per exercise)
- [ ] Rest timer between sets
- [ ] Edit existing workouts
- [ ] Body weight tracker
- [ ] Mobile APK via Capacitor

## License

MIT
