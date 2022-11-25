import { createSelector } from '@reduxjs/toolkit'

// ?reselect
const selectPageReducer = (state) => state.page

export const selectCurrentPage = createSelector(
  [selectPageReducer],
  (pageSlice) => pageSlice.page.data
)

export const selectPageSpinner = createSelector(
  [selectPageReducer],
  (pageSlice) => pageSlice.status
)
