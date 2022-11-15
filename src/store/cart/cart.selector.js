import { createSelector } from '@reduxjs/toolkit'

// ?reselect
const selectCartReducer = (state) => state.cart

export const selectCurrentCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cart.data
)

export const selectCartSpinner = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.status
)

export const selectCartDropdown = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.dropdown
)
