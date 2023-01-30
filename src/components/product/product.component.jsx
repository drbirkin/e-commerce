import './product.styles.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  selectCurrentProduct,
  selectProductSpinner,
} from '../../store/product/product.selector'
import { selectCartDropdown } from '../../store/cart/cart.selector'
import { selectCategoryDropdown } from '../../store/category/category.selector'
import { fetchProductAsync } from '../../store/product/product.action'

import ScaleLoader from 'react-spinners/ScaleLoader'
import ProductMenu from './product-menu.component'
import ProductImages from './product-images.component'
import ProductInfos from './product-infos.component'
import ProductDescription from './product-description.component'
export const Product = () => {
  const dispatch = useDispatch()
  const currentProduct = useSelector(selectCurrentProduct)
  const spinner = useSelector(selectProductSpinner)
  const cartDropdown = useSelector(selectCartDropdown)
  const categoryDropdown = useSelector(selectCategoryDropdown)
  const isFocus = cartDropdown || categoryDropdown

  const { product, sku, category } = useParams()
  useEffect(() => {
    dispatch(
      fetchProductAsync({
        slug: product,
        filterOptions: {},
        // filterOptions: {
        //   skuUnit: sku,
        // },
      })
    )
  }, [])

  const findSku = (skuArray) => skuArray.filter((unit) => unit.skuUnit === sku)

  if (spinner === 'loading')
    return (
      <div className="product-container">
        <ScaleLoader />
      </div>
    )
  else if (spinner === 'success') {
    // console.log('asdds:', currentProduct)
    const { sku, productname, description = '' } = currentProduct[0]
    const currentSku = findSku(sku)
    const { images, skuUnit } = currentSku[0]

    return (
      <div className="product-container">
        {isFocus && <div className="focus-cover"></div>}
        <ProductMenu category={category} />
        <div className="product-details">
          <ProductImages
            product={{
              images,
              currentSku: { productname, sku },
              skuUnit,
            }}
          />

          <div className="product-info">
            <ProductInfos
              currentProduct={{
                currentSku: currentSku[0],
                product: currentProduct[0],
                category,
              }}
            />
            <ProductDescription description={description} />
          </div>
        </div>
      </div>
    )
  }
  // return (
  //   <div className="product-container">
  //     {spinner === 'loading' && <ScaleLoader />}
  //     {spinner === 'success' && (
  //       <div className="product-details">
  //         <div className="product-images">
  //           <div className="product-image-slides">
  //             {currentProduct.images.map((image) => (
  //               <img src={`${image}`} alt={`${currentProduct.productname}`} />
  //             ))}
  //           </div>
  //           <img
  //             src={`${currentProduct.images[0]}`}
  //             alt={`${currentProduct.productname}`}
  //           />
  //         </div>
  //         <div className="product-info">
  //           <p>{currentProduct[0].productname}</p>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // )
}

export default Product
