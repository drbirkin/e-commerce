import './dropdown.styles.scss'
import { Link } from 'react-router-dom'

export const DropdownAccount = () => {
  return (
    <div className="dropdown-account dropdown-section">
      <p>Account</p>
      <Link>
        <span>My account</span>
      </Link>
      <Link>
        <span>My orders</span>
      </Link>
    </div>
  )
}

export default DropdownAccount
