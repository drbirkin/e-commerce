import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthenticationRoute from './routes/authentication/authentication.route'
import SettingRoute from './routes/settings/settings.route'
function App() {
  return (
    <Routes path="/">
      <Route path="auth/*" element={<AuthenticationRoute />} />
      <Route path="setting/*" element={<SettingRoute />} />
    </Routes>
  )
}

export default App
