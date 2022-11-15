import { useSelector } from 'react-redux'
import { selectCartDropdown } from '../../store/cart/cart.selector'

import './menu.styles.scss'

export const Menu = () => {
  const isFocus = useSelector(selectCartDropdown)
  return <div>{isFocus && <div className="focus-cover"></div>}</div>
}

export default Menu
