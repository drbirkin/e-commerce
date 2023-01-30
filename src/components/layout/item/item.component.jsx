import './item.styles.scss'
import ItemHover from './item-hover.component'
import { useState } from 'react'

export const Item = ({ item, sku, categoryTitle }) => {
  const [hover, setHover] = useState(false)

  const isHover = (isActive) => setHover(isActive)

  const {
    options: { colorName },
    images,
    price,
  } = sku
  const { images: itemImage, slug } = item
  // console.log('item: ', item)
  return (
    <div
      className="item-container"
      onMouseOver={isHover.bind(this, true)}
      onMouseOut={isHover.bind(this, false)}
    >
      <div className="product-image-container">
        {images?.length === 0 && (
          <img src={`${itemImage[0].default}`} alt={`${slug}`} />
        )}
        {images?.length > 0 && <img src={`${images[0]}`} alt={`${slug}`} />}
      </div>
      <div className="product-info-container">
        <p>{item.productname}</p>
        <p className="colorname">{colorName}</p>
        <p className="item-price">${price}</p>
      </div>

      {hover && (
        <ItemHover
          key={sku._id}
          item={item}
          sku={sku}
          categoryTitle={categoryTitle}
        />
      )}
    </div>
  )
}

export default Item
