import { createAction } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.type'
import { getUserInfo } from '../../api/user/user'
import { loginUser } from '../../api/authentications/authentication'

import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchUserStart = () =>
//   createAction(USER_ACTION_TYPES.FETCH_ACCOUNT_START)

// export const fetchUserSuccess = (user) =>
//   createAction(USER_ACTION_TYPES.FETCH_ACCOUNT_SUCCESS, user)

// export const fetchUserFailed = (error) =>
//   createAction(USER_ACTION_TYPES.FETCH_ACCOUNT_ERROR, error)

// export const fetchUserAsync = () => async (dispatch) => {
//   dispatch(fetchUserStart())
//   console.log('fetching user ..')
//   try {
//     const response = await getUserInfo()
//     // console.log('Account: ', response.data)
//     const account = response.data
//     dispatch(fetchUserSuccess(account))
//   } catch (error) {
//     dispatch(fetchUserFailed(error))
//     // console.error(error)
//   }
// }

export const fetchUserAsync = createAsyncThunk(
  'user/fetchUserAsync',
  async (User) => {
    try {
      if (User) {
        const { username, password, remember } = User
        try {
          await loginUser(username, password, remember)
        } catch (err) {
          console.log(err)
        }
      }
      console.log('fetching user ...')
      const response = await getUserInfo()
      // console.log(response)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
)
