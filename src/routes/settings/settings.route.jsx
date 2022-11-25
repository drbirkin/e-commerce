import { Route, Routes } from 'react-router-dom'
import GetUser from '../../components/page/settings/user/user.component'
// import Landing from '../../components/page/landing/landing.component'
export const SettingRoute = () => (
  <Routes>
    <Route path="/">
      {/* <Route index element={<Landing />}> */}
      <Route index element={<GetUser />}></Route>
    </Route>
  </Routes>
)

export default SettingRoute
