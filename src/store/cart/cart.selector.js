import { createSelector } from '@reduxjs/toolkit'
import { cartSlice } from './cart.reducer'

// ?reselect
const selectCartReducer = (state) => state.cart

export const selectCurrentCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cart.document
)

export const selectCartSpinner = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.status
)

export const selectCartDropdown = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.dropdown
)
