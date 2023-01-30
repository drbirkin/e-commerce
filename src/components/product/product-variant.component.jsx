import { useNavigate } from 'react-router-dom'
import './product.styles.scss'

export const ProductVariant = ({
  product: { sku, defaultImage, slug, skuUnit: unitNr, category },
}) => {
  const navigate = useNavigate()
  const goToProduct = (sku) => navigate(`/${category}/${slug}/${sku}`)
  return (
    <div className="product-variants">
      {sku.map(({ images, options, skuUnit }) => (
        <div
          onClick={goToProduct.bind(this, skuUnit)}
          className={`product-variant ${
            skuUnit === unitNr ? 'product-variant-active' : ''
          }`}
        >
          <img
            src={`${images && images[0] ? images[0] : defaultImage[0].default}`}
            alt={`${options.colorName}`}
          />
          <p>{options.colorName}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductVariant
