import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthenticationRoute from './routes/authentication/authentication.route'
import HomeRoute from './routes/home/home.route'
function App() {
  return (
    <Routes >
      <Route path="/*" element={<HomeRoute />} />
      <Route path="auth/*" element={<AuthenticationRoute />} />
    </Routes>
  )
}

export default App
