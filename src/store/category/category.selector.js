import { createSelector } from '@reduxjs/toolkit'

const selectCategoryReducer = (state) => state.category

export const selectCategory = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.currentCategory.data
)

export const selectCategorySpinner = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.status
)

export const selectCategoryDropdown = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isDropdown
)
