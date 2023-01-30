import { Fragment } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './navigation.styles.scss'

import { useSelector } from 'react-redux'

import { selectCartDropdown } from '../../store/cart/cart.selector'
import { selectCategoryDropdown } from '../../store/category/category.selector'

import CoverFocus from '../cover/cover-focus.componet'
import NavigationBurgermenu from './navigation-burgermenu.component'
import NavigationUser from './navigation-user.component'
import NavigationFavourite from './navigation-favourite.component'
import NavigationCart from './navigation-cart.component'
import NavigationCartDropdown from './navigation-cart-dropdown.component'
import NavigationBranding from './navigation-branding.component'

export const Navigation = () => {
  const cartDropdown = useSelector(selectCartDropdown)
  const categoryDropdown = useSelector(selectCategoryDropdown)

  useEffect(() => {
    cartDropdown || categoryDropdown
      ? document.body.classList.add('scroller-hidden')
      : document.body.classList.remove('scroller-hidden')
  }, [cartDropdown, categoryDropdown])
  // const email = currentUser ? currentUser.email : ''

  return (
    <Fragment>
      <div className="navigation-container">
        {/* category */}
        <NavigationBurgermenu />

        {/* branding */}
        <NavigationBranding />

        <div className="navlinks">
          {/* user */}
          <NavigationUser />

          {/* favourite */}
          <NavigationFavourite />

          {/* cart */}
          <NavigationCart />
        </div>

        {/* cart dropdown */}
        <NavigationCartDropdown />

        {(cartDropdown || categoryDropdown) && <CoverFocus />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
