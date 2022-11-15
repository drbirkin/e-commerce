import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as BurgerMenu } from '../../assets/img/burgermenu.svg'
import { ReactComponent as FavIcon } from '../../assets/img/favicon.svg'
import { ReactComponent as UserIcon } from '../../assets/img/usericon.svg'
import { ReactComponent as DropdownIcon } from '../../assets/img/dropdownicon.svg'
// import { ReactComponent as CartIcon } from '../../assets/img/carticon.svg'
import CartIcon from '../icons/cartIcon-component'
import Dropdown from '../dropdown/dropdown.component'
import CartDropdown from '../cart/cart.component'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { isCartDropdown } from '../../store/cart/cart.reducer'

import {
  selectCurrentUser,
  selectUserSpinner,
} from '../../store/user/user.selector'
import {
  selectCartDropdown,
  selectCartSpinner,
} from '../../store/cart/cart.selector'

import ScaleLoader from 'react-spinners/ScaleLoader'

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { userApi } from '../../api/user/user'
// import { setCurrentUser } from '../../store/user/user.action'
// import { selectCurrentUser } from '../../store/user/user.selector'
export const Navigation = () => {
  const dispatch = useDispatch()
  const cartDropdown = useSelector(selectCartDropdown)
  const currentUser = useSelector(selectCurrentUser)
  const status = useSelector(selectUserSpinner)
  const cartStatus = useSelector(selectCartSpinner)

  const [dropdown, setDropdown] = useState(false)
  const [name, setUsername] = useState('')

  const isDropdown = (isActive) => {
    setDropdown(isActive)
  }
  const openCartDropdown = () => dispatch(isCartDropdown({ payload: true }))

  const navigate = useNavigate()
  useEffect(() => {
    if (status === 'success') {
      setUsername(currentUser?.username)
    }
    // console.log('effect')
  }, [status, currentUser?.username])
  // const email = currentUser ? currentUser.email : ''

  return (
    <Fragment>
      <div className="navigation-container">
        <div className="menu-container">
          <BurgerMenu className="navicon" />
        </div>
        <div className="logo-container">
          <span className="logo">LOGO</span>
        </div>
        <div className="navlinks">
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
                  <span className="username">Hi, {name}</span>
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

          {/* {currentUser.data ? (
            <Link className="icon" to="/setting">
              <div className="settings">
                <div className="my-account">
                  <span>Hi, David</span>
                  <span>Settings</span>
                  <DropdownIcon />
                </div>
              </div>
            </Link>
          ) : (
            <Link className="icon" to="/auth">
              <UserIcon className="navicon" />
            </Link>
          )} */}
          <div className="fav-icon icon">
            <FavIcon className="navicon" />
          </div>
          {cartStatus === 'success' ? (
            <div className="cart-icon icon" onClick={openCartDropdown}>
              {/* <CartIcon className="navicon" /> */}
              <CartIcon />
            </div>
          ) : (
            <div className="cart-icon icon" style={{ opacity: '0.5' }}>
              {/* <CartIcon className="navicon" /> */}
              <CartIcon />
            </div>
          )}
        </div>
        {cartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
