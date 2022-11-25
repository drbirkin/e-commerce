import { useState, Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../../../store/category/category.selector'
import './root-category.styles.scss'

import RootChildCategory from '../root-child-category/root-child-category.component'

export const RootCategory = ({ category }) => {
  const { childcategory, categoryname } = category
  const [isDropdown, setIcon] = useState(false)
  const [newClass, setNewclass] = useState('')
  const setDropdown = () => {
    setIcon(!isDropdown)
  }

  useEffect(() => {
    isDropdown
      ? setNewclass('child-category-container-visible')
      : setNewclass('')
  }, [isDropdown])

  return (
    <Fragment>
      <div className="category-dropdown" onClick={setDropdown}>
        <p>{categoryname}</p>
        {isDropdown ? <p>&#45;</p> : <p>&#43;</p>}
      </div>
      {childcategory.length !== 0 && isDropdown && (
        <div className={`child-category-container ${newClass}`}>
          <div className="child-category">
            <span>view {categoryname} collections</span>
          </div>
          {childcategory.map((child) => (
            <RootChildCategory childCategory={child} key={child._id} />
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default RootCategory
