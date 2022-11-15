import { createAsyncThunk } from '@reduxjs/toolkit'
import { addToCart, getCart } from '../../api/cart/cart.jsx'

// thunk
export const fetchCartAsync = createAsyncThunk(
  'cart/fetchCartAsync',
  async (Product) => {
    console.log('fetching cart ...')
    let response
    if (!Product) {
      response = await getCart()
    } else {
      const { slug, variant, quantity } = Product
      response = await addToCart(slug, variant, quantity)
    }

    return response.data
  }
)
