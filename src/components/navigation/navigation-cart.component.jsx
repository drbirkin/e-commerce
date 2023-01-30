import CartIcon from '../icons/cartIcon-component'

import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartSpinner } from '../../store/cart/cart.selector'
import { isCartDropdown } from '../../store/cart/cart.reducer'

export const NavigationCart = () => {
  const dispatch = useDispatch()
  const cartStatus = useSelector(selectCartSpinner)

  const openCartDropdown = () => dispatch(isCartDropdown({ payload: true }))
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default NavigationCart
