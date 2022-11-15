import { createSelector } from '@reduxjs/toolkit'

// ?reselect
// memorize reducer
const selectUserReducer = (state) => state.user
// memorize reducer state
export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (acctSlice) => acctSlice.currentUser.data
)

export const selectUserSpinner = createSelector(
  [selectUserReducer],
  (acctSlice) => acctSlice.status
)
