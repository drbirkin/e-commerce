import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"
export const GetUser = () => {
    const { data: {
        id
    } } = useSelector(selectCurrentUser)
    console.log('user:', id)
    return (
        <div>
            <span>
                User {id}

            </span>
        </div>
    )
}