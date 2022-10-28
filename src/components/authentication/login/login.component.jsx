import { useState } from 'react'
import LoginForm from '../../forms/login-form/login-form.component'
import './login.styles.scss'
export const Login = () => {
  return (
    <div className="form-section">
      {/* <div className="background-cover"></div> */}
      <div className="login-form">
        <p className="title">Hello Again!</p>
        <p>Welcome back you've been missed!</p>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
