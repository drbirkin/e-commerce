import { ReactComponent as UserIcon } from '../../assets/img/usericon.svg'
import { ReactComponent as DropdownIcon } from '../../assets/img/dropdownicon.svg'
import ScaleLoader from 'react-spinners/ScaleLoader'

import { useState } from 'react'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  selectUserSpinner,
  selectCurrentUser,
} from '../../store/user/user.selector'

import Dropdown from '../dropdown/dropdown.component'

export const NavigationUser = () => {
  const navigate = useNavigate()
  const status = useSelector(selectUserSpinner)
  const currentUser = useSelector(selectCurrentUser)
  const [dropdown, setDropdown] = useState(false)

  const isDropdown = (isActive) => {
    setDropdown(isActive)
  }

  const { username = '' } = currentUser ?? {}

  return (
    <Fragment>
      {status === 'loading' && (
        <Link className="icon" to="/setting">
          <ScaleLoader style={{ opacity: '.6' }} />
        </Link>
      )}
      {status === 'success' && (
        <div className="icon" onClick={() => navigate('/setting')}>
          <div
            className="settings"
            onMouseOver={isDropdown.bind(this, true)}
            onMouseOut={isDropdown.bind(this, false)}
          >
            <div className="my-account">
              <span className="username">Hi, {username}</span>
              <span>Settings</span>
              <DropdownIcon />
            </div>
            {dropdown && <Dropdown />}
          </div>
        </div>
      )}
      {status === 'idle' && (
        <Link className="icon" to="/auth">
          <UserIcon className="navicon" />
        </Link>
      )}
    </Fragment>
  )
}

export default NavigationUser
