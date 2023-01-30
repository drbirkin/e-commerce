import './dropdown.styles.scss'
import { logoutUser } from '../../api/authentications/authentication'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../store/user/user.selector'

import DropdownAccount from './dropdown-account.component'
import DropdownAdmin from './dropdown-admin.component'

export const Dropdown = () => {
  const roles = ['admin', 'moderator']
  const navigate = useNavigate()
  const user = useSelector(selectCurrentUser)
  // console.log('dropdown', user)
  const logout = async () => {
    await logoutUser()
    navigate('/')
    window.location.reload(false)
  }
  return (
    <div className="dropdown-main">
      <div className="dropdown-promo"></div>
      <div className="dropdown-setting">
        {roles.includes(user.role) && <DropdownAdmin />}
        <DropdownAccount />
        <button onClick={logout}>Sign out</button>
      </div>
    </div>
  )
}

export default Dropdown
