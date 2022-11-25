import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isCategoryDropdown } from '../../../store/category/category.reducer'
import { selectCategory } from '../../../store/category/category.selector'

import RootCategory from './root-category/root-category.component'

import './root.styles.scss'

export const CategoryDropdown = () => {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategory).rootCategories
  const categoryDropdown = () => dispatch(isCategoryDropdown(false))

  // console.log('category', categories)
  // useEffect(() => {
  //   // setItemCountArr([carts?.cart[0].quantity])
  //   console.log(carts?.cart[0].quantity)
  // }, [])

  return (
    <div className="root-container">
      <div className="category-controller">
        <button onClick={categoryDropdown}>Close</button>
        <p>Menu</p>
      </div>
      <div className="categories-container">
        {categories?.length !== 0 &&
          categories.map((category) => (
            <RootCategory category={category} key={category._id} />
          ))}
      </div>
    </div>
  )
}

export default CategoryDropdown
