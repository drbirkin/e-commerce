import './product.styles.scss'
import { useNavigate } from 'react-router-dom'

export const ProductMenu = ({ category }) => {
  const navigate = useNavigate()

  const menuHandler = (url) => navigate(`${url}`)
  return (
    <div className="product-menu">
      <p onClick={menuHandler.bind(this, '/')}>Home</p> ->{' '}
      <p className="product-menu-active">{category}</p>
    </div>
  )
}

export default ProductMenu
