import { combineReducers } from 'redux'
import {userReducer} from './user/user.reducer'
// combine all reducer functions
export const rootReducer = combineReducers({
  user: userReducer,
})
