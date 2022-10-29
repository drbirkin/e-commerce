import { Route, Routes } from "react-router-dom";
import { GetUser } from "../../components/settings/user/user.component";
export const SettingRoute = () => (
    <Routes>
        <Route index element={<GetUser />}>
        </Route>
    </Routes>
)

export default SettingRoute