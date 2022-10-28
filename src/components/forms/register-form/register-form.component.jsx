import './register-form.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { ReactComponent as PenLiner } from '../../../assets/img/pen line.svg'
import { loginApi } from '../../../api/authentications/authentication'
import RingLoader from 'react-spinners/RingLoader'

export const RegisterationForm = () => {
  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [username, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(event.target, username, password, remember)
    // try {
    //   const response = await loginApi.post(
    //     'api/v1/users/login',
    //     JSON.stringify({ username, password, email, confirmPassword })
    //   )
    //   console.log('responses: ', response.data)
    // } catch (err) {
    //   console.error(err)
    // }
    setLoading(!loading)
  }

  useEffect(() => userRef.current.focus(), [])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={username}
        placeholder="Username"
        required
      />
      <input
        type="email"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        required
      />

      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        placeholder="Confirm password"
        required
      />

      {/* <div className="options">
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
      </div> */}

      <button
        type="submit"
        className="button"
        onClick={() => setLoading(!loading)}
      >
        {!loading ? (
          <span>Create an account</span>
        ) : (
          <RingLoader loading={loading} color={'white'} size={25} />
        )}
      </button>

      <p className="register">
        Already have an account?{' '}
        <span
          onClick={() => navigate('/auth/login')}
          className="registerButton"
        >
          Log in
          <PenLiner className="highlighter" />
        </span>
      </p>
    </form>
  )
}

export default RegisterationForm
