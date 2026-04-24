import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Workouts from './pages/Workouts.jsx'
import Programs from './pages/Programs.jsx'
import Guides from './pages/Guides.jsx'
import Layout from './components/Layout.jsx'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('gd_user')
  return user ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="programs" element={<Programs />} />
          <Route path="guides" element={<Guides />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}