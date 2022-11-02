import { Route, Routes } from 'react-router-dom'
import SettingRoute from '../settings/settings.route'
import Navigation from '../../components/navigation/navigation.component'
export const HomeRoute = () => {
    return (
        <Routes >
            <Route path='/' element={<Navigation />}>
                <Route path='setting/*' element={<SettingRoute />}></Route>
            </Route>
        </Routes>
    )
}

export default HomeRoute