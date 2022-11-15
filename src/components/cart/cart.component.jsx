import { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isCartDropdown } from '../../store/cart/cart.reducer'
import { selectCurrentCart } from '../../store/cart/cart.selector'

import ShoppingCart from '../shopping/shopping-cart.component'

import './cart.styles.scss'

export const CartDropdown = () => {
  const dispatch = useDispatch()
  const carts = useSelector(selectCurrentCart)
  const cartDropdown = () => dispatch(isCartDropdown(false))

  const [itemCountArr, setItemCountArr] = useState([carts?.cart[0]?.quantity])

  // useEffect(() => {
  //   // setItemCountArr([carts?.cart[0].quantity])
  //   console.log(carts?.cart[0].quantity)
  // }, [])

  return (
    <div className="cart-container">
      <div className="cart-controller">
        <p>Shopping cart</p>
        <button onClick={cartDropdown}>Close</button>
      </div>
      <div className="shoppings-container">
        {carts?.cart?.length !== 0 &&
          carts?.cart?.map((cart, index) => {
            return (
              <ShoppingCart
                cart={cart}
                key={cart._id}
                itemCountArr={itemCountArr}
                setItemCountArr={setItemCountArr}
                index={index}
              />
            )
          })}
      </div>
      {carts?.cart.length !== 0 && (
        <Fragment>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>
              ${carts?.totalPrice}
              {/* {carts?.cart?.reduce(
                (previousValue, curentValue, index) =>
                  previousValue +
                  (itemCountArr[index] || 0) * curentValue.product[0].price,
                0
              )} */}
            </span>
          </div>
          <div className="cart-checkout">
            <p>Shipping & taxes caculated at checkout</p>
            <button>Checkout</button>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default CartDropdown
