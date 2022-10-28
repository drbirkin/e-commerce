import { Route, Routes } from 'react-router-dom'
import Login from '../../components/authentication/login/login.component'
// import RegisterRoute from './register/register.route'
import Registeration from '../../components/authentication/register/register.component'
import BackgroundCover from '../../components/authentication/background-cover/background-cover.component'
export const AuthenticationRoute = () => (
  <Routes>
    <Route path="/" element={<BackgroundCover />}>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Registeration />}></Route>
    </Route>
  </Routes>
)

export default AuthenticationRoute
