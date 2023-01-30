import './dropdown.styles.scss'
import { Link } from 'react-router-dom'

export const DropdownAdmin = () => {
  return (
    <div className="dropdown-admin dropdown-section">
      <p>Admin</p>
      <Link to="">
        <span>Admin panel</span>
      </Link>
    </div>
  )
}

export default DropdownAdmin
