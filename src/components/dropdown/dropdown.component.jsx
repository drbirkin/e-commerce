import './dropdown.styles.scss'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../api/authentications/authentication'
import { useNavigate } from 'react-router-dom'

export const Dropdown = () => {
  const navigate = useNavigate()
  // console.log('dropdown')
  const logout = async () => {
    await logoutUser()
    navigate('/')
    window.location.reload(false)
  }
  return (
    <div className="dropdown-main">
      <div className="dropdown-promo"></div>
      <div className="dropdown-setting">
        <p>Account</p>
        <Link>
          <span>My account</span>
        </Link>
        <Link>
          <span>My orders</span>
        </Link>
        <button onClick={logout}>Sign out</button>
      </div>
    </div>
  )
}

export default Dropdown
