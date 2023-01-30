import './product.styles.scss'
import { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ProductVariant from './product-variant.component'

import { fetchCartAsync } from '../../store/cart/cart.action'

export const ProductInfos = ({
  currentProduct: {
    currentSku: { variants, price, skuUnit },
    product: { productname, slug, images: defaultImage, sku },
    category,
  },
}) => {
  const defaultId = variants[0]._id
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  const handleCart = async (quantity, event) => {
    event.preventDefault()
    try {
      dispatch(
        fetchCartAsync({
          slug: slug,
          variant: id,
          quantity: 1,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  const skuHandler = (id, e) => {
    e.preventDefault()
    setId(id)
  }

  useEffect(() => setId(defaultId), [defaultId])

  //   console.log(variants, sku)
  return (
    <Fragment>
      <p className="product-title">{productname}</p>
      <p>${price}</p>

      <p className="product-option-title">Size:</p>
      <div className="product-sizes">
        {variants.map(({ properties, _id }) => (
          <div onClick={skuHandler.bind(this, _id)}>
            <span>{properties.size}</span>
          </div>
        ))}
      </div>
      <p className="product-option-title">Color:</p>
      <ProductVariant
        product={{ slug, sku, defaultImage, skuUnit, category }}
      />

      <button className="product-atc-button" onClick={handleCart.bind(this, 1)}>
        add to cart
      </button>
      <button className="product-fav-button">add to favourite</button>
    </Fragment>
  )
}

export default ProductInfos
