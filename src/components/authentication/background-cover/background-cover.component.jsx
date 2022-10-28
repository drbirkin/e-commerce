import './background-cover.scss'
import { Outlet } from 'react-router-dom'
export const BackgroundCover = () => {
  return (
    <div className="auth-sections">
      <div className="background-cover"></div>
      <Outlet />
    </div>
  )
}

export default BackgroundCover
