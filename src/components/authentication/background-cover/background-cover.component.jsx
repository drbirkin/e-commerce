import './background-cover.scss'
import { Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUserSpinner } from '../../../store/user/user.selector'

import { Navigate } from 'react-router-dom'

export const BackgroundCover = () => {
  const status = useSelector(selectUserSpinner)

  if (status !== 'idle' && status !== 'failed' && status !== 'loading') {
    return <Navigate to="/" />
  }
  return (
    <div className="auth-sections">
      <div className="background-cover"></div>
      <Outlet />
    </div>
  )
}

export default BackgroundCover
