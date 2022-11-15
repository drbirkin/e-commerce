import { ReactComponent as Icon } from '../../assets/img/carticon.svg'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  selectCurrentCart,
  selectCartSpinner,
} from '../../store/cart/cart.selector'

import { Fragment } from 'react'
import './cartIcon.styles.scss'
export const CartIcon = () => {
  const cart = useSelector(selectCurrentCart)
  const cartStatus = useSelector(selectCartSpinner)
  const [cartCount, setCount] = useState()

  useEffect(() => {
    if (cartStatus === 'success') {
      setCount(cart?.cart.length)
    }
  }, [cartStatus, cart])
  return (
    <Fragment>
      <span>{cartCount}</span>
      <Icon className="navicon"></Icon>
    </Fragment>
  )
}

export default CartIcon
