import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import SettingRoute from '../settings/settings.route'
import Navigation from '../../components/navigation/navigation.component'
import Menu from '../../components/menu/menu.component'

import { useDispatch, useSelector } from 'react-redux'

// import { fetchUserAsync } from '../../store/user/user.action'
import { fetchCartAsync } from '../../store/cart/cart.action'

// import { selectUserSpinner } from '../../store/user/user.selector'

export const HomeRoute = () => {
  const dispatch = useDispatch()
  // const status = useSelector(selectUserSpinner)

  // useEffect(() => {
  //   console.log('fetching user data ...')
  //   setTimeout(() => dispatch(fetchUserAsync()), 500)
  // }, [])

  useEffect(() => {
    // fetch cart
    console.log('fetching cart data ...')
    dispatch(fetchCartAsync())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Menu />}></Route>
        <Route path="setting/*" element={<SettingRoute />}></Route>
      </Route>
    </Routes>
  )
}

export default HomeRoute
