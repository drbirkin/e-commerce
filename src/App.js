import './App.css'

import { SkeletonTheme } from 'react-loading-skeleton'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchUserAsync } from './store/user/user.action'

import { Routes, Route } from 'react-router-dom'
import AuthenticationRoute from './routes/authentication/authentication.route'
import HomeRoute from './routes/home/home.route'

function App() {
  const dispatch = useDispatch()
  // const status = useSelector(selectUserSpinner)

  useEffect(() => {
    console.log('fetching user data ...')
    setTimeout(() => dispatch(fetchUserAsync()), 500)
  }, [])

  return (
    <SkeletonTheme baseColor="rgb(245, 245, 245)" highlightColor="white">
      <Routes>
        <Route path="/*" element={<HomeRoute />} />
        <Route path="auth/*" element={<AuthenticationRoute />} />
      </Routes>
    </SkeletonTheme>
  )
}

export default App
