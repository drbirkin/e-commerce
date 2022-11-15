import './login.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { ReactComponent as PenLiner } from '../../../assets/img/pen line.svg'
// import { loginUser } from '../../../api/authentications/authentication'
import BeatLoader from 'react-spinners/BeatLoader'

import { selectUserSpinner } from '../../../store/user/user.selector'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAsync } from '../../../store/user/user.action'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const status = useSelector(selectUserSpinner)
  // const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(event.target, username, password, remember)
    try {
      // loggin in
      // setLoading(true)
      // await loginUser(username, password, remember)
      dispatch(
        fetchUserAsync({
          username: username,
          password: password,
          remember: remember,
        })
      )

      // navigate('/setting')
    } catch (err) {
      console.error(err)
    }
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
        // onClick={() => setLoading(!loading)}
      >
        {(status === 'idle' || status === 'failed') && <span>Log in</span>}
        {status === 'loading' && (
          <div style={{ display: 'flex', position: 'relative' }}>
            <BeatLoader
              color={'white'}
              size={10}
              style={{ position: 'absolute', left: '-2.6em' }}
            />{' '}
            <span>Loading</span>
          </div>
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
