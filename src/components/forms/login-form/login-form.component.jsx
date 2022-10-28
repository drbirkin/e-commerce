import './login.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { ReactComponent as PenLiner } from '../../../assets/img/pen line.svg'
import { loginApi } from '../../../api/authentications/authentication'
import RingLoader from 'react-spinners/RingLoader'

export const LoginForm = () => {
  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(event.target, username, password, remember)
    try {
      const response = await loginApi.post(
        'api/v1/users/login',
        JSON.stringify({ username, password, remember })
      )
      console.log('responses: ', response.data)
    } catch (err) {
      console.error(err)
    }
    setLoading(!loading)
  }

  useEffect(() => userRef.current.focus(), [])

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">Email</label> */}
      <input
        type="text"
        id="email"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={username}
        placeholder="Email or Username"
        required
      />

      {/* <label htmlFor="password">Password</label> */}
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        required
      />

      <div className="options">
        <label className="remember">
          <input
            type="checkbox"
            id="remember"
            // value={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember account
        </label>
        <span onClick={() => navigate('forgotPassword')} className="forget">
          Forgot password?
        </span>
      </div>

      <button
        type="submit"
        className="button"
        onClick={() => setLoading(!loading)}
      >
        {!loading ? (
          <span>Log in</span>
        ) : (
          <RingLoader loading={loading} color={'white'} size={25} />
        )}
      </button>

      <p className="register">
        Don't have an account?{' '}
        <span
          onClick={() => navigate('/auth/register')}
          className="registerButton"
        >
          Sign up for free
          <PenLiner className="highlighter" />
        </span>
      </p>
    </form>
  )
}

export default LoginForm
