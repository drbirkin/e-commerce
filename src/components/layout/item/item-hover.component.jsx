import './item.styles.scss'
import { fetchCartAsync } from '../../../store/cart/cart.action'
import { fetchProductAsync } from '../../../store/product/product.action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ItemHover = ({ item, sku, categoryTitle }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleCart = async (id, quantity, event) => {
    event.preventDefault()
    try {
      dispatch(
        fetchCartAsync({
          slug: item.slug,
          variant: id,
          quantity: 1,
        })
      )
      // console.log(quantity)
    } catch (error) {
      console.log(error)
    }
  }

  const goToProduct = () => {
    navigate(`/${categoryTitle}/${item.slug}/${skuUnit}`)
  }
  const { images, variants, skuUnit } = sku
  const { images: itemImage, slug } = item
  return (
    <div className="item-hover-container">
      <div className="product-image-container" onClick={goToProduct}>
        {images?.length === 0 && (
          <img src={`${itemImage[0].default}`} alt={`${slug}`} />
        )}
        {images?.length < 2 && images?.length !== 0 && (
          <img src={`${images[0]}`} alt={`${slug}`} />
        )}
        {images?.length > 1 && <img src={`${images[1]}`} alt={`${slug}`} />}
      </div>
      <div className="product-info-container">
        <p>{item.productname}</p>
        {variants.map(({ properties: { size, quantity }, _id }) =>
          quantity ? (
            <span
              className="item-size"
              onClick={handleCart.bind(this, _id, quantity)}
              key={sku._id + _id}
            >
              {size}
            </span>
          ) : (
            <span className="item-size-oos">{size}</span>
          )
        )}
      </div>
    </div>
  )
}

export default ItemHover
