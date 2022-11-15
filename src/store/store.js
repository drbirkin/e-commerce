import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: [thunk, logger],
})

export default store

// import { compose, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// import { rootReducer } from './root-reducer'

// // action passed to middleware before reducer
// // custom middleware
// // currying function
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action)
//   }

//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('current state: ', store.getState()) //current reducer state of root

//   next(action)

//   console.log('next state: ', store.getState())
// }

// const middleWares = [loggerMiddleware, thunk]
// // default logger
// // const middleWares = [logger]

// const composedEnhancers = compose(applyMiddleware(...middleWares))
// // root reducer
// // ?clientside storage
// export const store = createStore(rootReducer, undefined, composedEnhancers)
