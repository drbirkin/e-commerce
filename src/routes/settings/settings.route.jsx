import { Route, Routes } from "react-router-dom";
import GetUser from "../../components/settings/user/user.component";
export const SettingRoute = () => (
    <Routes>
        <Route path='/'>
            <Route index element={<GetUser />}>
            </Route>
        </Route>
    </Routes>
)

export default SettingRoute