import './root-child-category.styles.scss'
import { useState } from 'react'

export const RootChildCategory = ({ childCategory }) => {
  const { categoryname, isLeaf } = childCategory
  const [isDropdown, setIcon] = useState(false)
  const setDropdown = () => {
    setIcon(!isDropdown)
  }
  // console.log(childCategory, categoryname)
  return isLeaf ? (
    <div className="child-category">
      <span>{categoryname}</span>
    </div>
  ) : (
    <div className="child-dropdown" onClick={setDropdown}>
      <span>{categoryname}</span>
      {isDropdown ? <p>&#45;</p> : <p>&#43;</p>}
    </div>
  )
}

export default RootChildCategory
