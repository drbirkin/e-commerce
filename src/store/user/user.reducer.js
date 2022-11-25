import { USER_ACTION_TYPES } from './user.type'
import { createSlice } from '@reduxjs/toolkit'
import { fetchUserAsync } from './user.action'

// state
const INITIAL_STATE = {
  currentUser: {},
  status: '',
  error: null,
}

// redux toolkits
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    fetchUser(state = INITIAL_STATE, action = {}) {
      return { ...state, currentUser: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.currentUser = action.payload
        const data = state.currentUser.data
        // console.log(data)
        state.status = data ? 'success' : 'idle'
        // console.log(state.currentUser)
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'failed'
      })
  },
})

// redux native
// export const userReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action
//   switch (type) {
//     case USER_ACTION_TYPES.FETCH_ACCOUNT_START:
//       return { ...state, isLoading: true }
//     case USER_ACTION_TYPES.FETCH_ACCOUNT_SUCCESS:
//       return {
//         ...state,
//         currentUser: payload,
//         isLoading: false,
//       }
//     case USER_ACTION_TYPES.FETCH_ACCOUNT_FAILED:
//       return {
//         ...state,
//         error: payload,
//         isLoading: false,
//       }
//     default:
//       return state
//   }
// }

export const { fetchUser } = userSlice.actions
export default userSlice.reducer
