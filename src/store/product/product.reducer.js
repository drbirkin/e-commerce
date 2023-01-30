import { createSlice } from '@reduxjs/toolkit'
import { fetchProductAsync } from './product.action'

const INITIAL_STATE = {
  product: {},
  status: '',
  error: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    fetchPage(state = INITIAL_STATE, action = {}) {
      return { ...state, product: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.product = action.payload
        // console.log('state: ', state.product)

        if (state.product.length) state.status = 'success'
        else state.status = 'idle'
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'failed'
      })
  },
})

export const { fetchProduct } = productSlice.actions
export default productSlice.reducer
