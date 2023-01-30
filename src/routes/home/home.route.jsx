import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../../components/navigation/navigation.component'
import Menu from '../../components/page/menu/menu.component'
import SettingRoute from '../settings/settings.route'
import ProductRoute from '../product/product.route'

import { useDispatch } from 'react-redux'

// import { fetchUserAsync } from '../../store/user/user.action'
import { fetchCartAsync } from '../../store/cart/cart.action'
import { fetchCategoryAsync } from '../../store/category/category.action'

// import { selectUserSpinner } from '../../store/user/user.selector'

export const HomeRoute = () => {
  const dispatch = useDispatch()
  // const status = useSelector(selectUserSpinner)

  useEffect(() => {
    console.log('fetching category data ...')
    dispatch(fetchCategoryAsync())
  }, [])

  useEffect(() => {
    // fetch cart
    console.log('fetching cart data ...')
    dispatch(fetchCartAsync())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Menu />}></Route>
        <Route path=":category/:product/*" element={<ProductRoute />} />
        <Route path="setting/*" element={<SettingRoute />}></Route>
      </Route>
    </Routes>
  )
}

export default HomeRoute
