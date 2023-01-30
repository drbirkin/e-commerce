import './product.styles.scss'
import { Fragment } from 'react'
export const ProductDescription = ({ description }) => {
  const dropdownHandler = (event) => {
    const {
      target: { nextElementSibling: content },
    } = event
    // console.log(event.target)
    event.target.classList.toggle('product-dropdown-title-active')
    content.classList.toggle('product-dropdown-show')
  }

  return (
    <Fragment>
      <div className="product-description product-dropdown">
        <p
          className="product-dropdown-title product-dropdown-title-active"
          onClick={dropdownHandler}
        >
          Editor's Notes:
        </p>
        <div className="product-dropdown-text product-dropdown-show">
          <p>{description}</p>
        </div>
      </div>

      <div className="product-description product-dropdown">
        <p className="product-dropdown-title" onClick={dropdownHandler}>
          Delivery and Returns:
        </p>
        <div className="product-dropdown-text">
          <p>
            Find out more about our delivery options. Try items in the comfort
            of your own home. If they're not quite right, you've got 28 days to
            request an exchange or return and send them back to us. We'll
            collect them from your home or office for free.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductDescription
