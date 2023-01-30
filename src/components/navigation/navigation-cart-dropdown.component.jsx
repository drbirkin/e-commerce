import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCartDropdown } from '../../store/cart/cart.selector'

import CartDropdown from '../cart/cart.component'

export const NavigationCartDropdown = () => {
  const cartDropdown = useSelector(selectCartDropdown)
  return <Fragment>{cartDropdown && <CartDropdown />}</Fragment>
}

export default NavigationCartDropdown
