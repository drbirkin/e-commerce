import { createAsyncThunk } from '@reduxjs/toolkit'
import { addToCart, getCart } from '../../api/cart/cart.jsx'

// thunk
export const fetchCartAsync = createAsyncThunk(
  'cart/fetchCartAsync',
  async (Product) => {
    if (Product) {
      console.log('adding cart ...')
      const { slug, variant, quantity } = Product
      await addToCart(slug, variant, quantity)
    }
    console.log('fetching cart ...')
    const response = await getCart()

    return response.data
  }
)
