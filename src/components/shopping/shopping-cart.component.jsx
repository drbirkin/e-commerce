import './shopping-cart.styles.scss'

import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

// import { addToCart } from '../../api/cart/cart'
// import { addItemToCart } from '../../store/cart/cart.reducer'
// import { selectCartSpinner } from '../../store/cart/cart.selector'

import { fetchCartAsync } from '../../store/cart/cart.action'

export const ShoppingCart = ({
  cart,
  itemCountArr,
  setItemCountArr,
  index,
}) => {
  // const cartStatus = useSelector(selectCartSpinner)
  const dispatch = useDispatch()
  const { size, color, quantity, variant, product } = cart
  // const [itemCount, setItemCount] = useState(0)
  const { slug, productname, price, images } = product[0]

  // const updateCountArray = (quantity) => {
  //   const newArr = [...itemCountArr]
  //   newArr[index] = quantity
  //   setItemCountArr([...newArr])
  // }

  const manageCartItem = async (itemQuantity) => {
    console.log('adding item to cart ...')
    // await addToCart(slug, variant, itemQuantity)
    // const newCount = itemCount + itemQuantity
    // setItemCount(newCount)
    // updateCountArray(newCount)
    // dispatch(addItemToCart())
    dispatch(
      fetchCartAsync({
        slug: slug,
        variant: variant,
        quantity: itemQuantity,
      })
    )
  }

  // useEffect(() => {
  //   setItemCount(quantity)
  //   updateCountArray(quantity)
  // }, [quantity, cartStatus])

  return (
    quantity !== 0 && (
      // itemCount !== 0 && (
      <div className="shopping-cart">
        <img src={images[0].default} alt={slug} />
        <div className="shopping-cart-info">
          <p>{productname}</p>
          <div className="shopping-cart-variants">
            <span>{color}</span>
            <span>{size}</span>
          </div>
          <div className="shopping-cart-total">
            <div className="shopping-cart-controll">
              <span className="action" onClick={manageCartItem.bind(this, -1)}>
                &#45;
              </span>
              {/* <span>{itemCount}</span> */}
              <span>{quantity}</span>
              <span className="action" onClick={manageCartItem.bind(this, 1)}>
                &#43;
              </span>
            </div>
            {/* <span>${itemCount * price}</span> */}
            <span>${quantity * price}</span>
          </div>
        </div>
      </div>
    )
  )
}

export default ShoppingCart
