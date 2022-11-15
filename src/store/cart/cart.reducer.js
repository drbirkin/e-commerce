import { createSlice } from '@reduxjs/toolkit'
import { fetchCartAsync, addToCartAsync } from './cart.action'

const INITIAL_STATE = {
  cart: [],
  status: '',
  error: null,
  dropdown: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    fetchCart(state = INITIAL_STATE, action = {}) {
      return { ...state, cart: action.payload }
    },
    isCartDropdown(state = INITIAL_STATE, action = {}) {
      return { ...state, dropdown: action.payload }
    },
    addItemToCart(state = INITIAL_STATE, action = {}) {
      return { ...state }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cart = action.payload
        // console.log(state.cart.data)
        if (state.cart.data) state.status = 'success'
        else state.status = 'idle'
      })
      .addCase(fetchCartAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'failed'
      })
    // builder
    //   .addCase(addToCartAsync.pending, (state, action) => {
    //     state.status = 'loading'
    //   })
    //   .addCase(addToCartAsync.fulfilled, (state, action) => {
    //     state.cart = action.payload
    //     state.status = 'idle'
    //   })
    //   .addCase(addToCartAsync.rejected, (state, action) => {
    //     state.error = action.error.message
    //     state.status = 'failed'
    //   })
  },
})

export const { fetchCart, addItemToCart, isCartDropdown } = cartSlice.actions
export default cartSlice.reducer
