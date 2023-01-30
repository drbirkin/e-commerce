import { createSelector } from '@reduxjs/toolkit'

// ?reselect
const selectProductReducer = (state) => state.product

export const selectCurrentProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.product
)

export const selectProductSpinner = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.status
)
