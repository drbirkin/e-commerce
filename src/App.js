import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthenticationRoute from './routes/authentication/authentication.route'
function App() {
  return (
    <Routes path="/">
      <Route path="auth/*" element={<AuthenticationRoute />} />
    </Routes>
  )
}

export default App
