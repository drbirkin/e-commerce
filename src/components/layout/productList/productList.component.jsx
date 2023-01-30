import './productList.styles.scss'
import Item from '../item/item.component'

export const ProductList = ({ layout }) => {
  const {
    category: { products },
    title,
    subHeading,
  } = layout
  // console.log(products, title)
  return (
    <div className="productList-container">
      <p className="productList-title">{title}</p>
      <p className="productList-heading">{subHeading}</p>
      <div className="products-container">
        {products.map((product) =>
          product.sku.map((sku) => (
            <Item
              key={sku._id}
              item={product}
              sku={sku}
              categoryTitle={title}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList
