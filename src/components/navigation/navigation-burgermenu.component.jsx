import { ReactComponent as BurgerMenu } from '../../assets/img/burgermenu.svg'
import { isCategoryDropdown } from '../../store/category/category.reducer'
import {
  selectCategorySpinner,
  selectCategoryDropdown,
} from '../../store/category/category.selector'
import CategoryDropdown from '../category/root/root.component'

import { Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'

export const NavigationBurgermenu = () => {
  const dispatch = useDispatch()
  const categoryStatus = useSelector(selectCategorySpinner)
  const categoryDropdown = useSelector(selectCategoryDropdown)
  const openCategoryDropdown = () =>
    dispatch(isCategoryDropdown({ payload: true }))

  return (
    <Fragment>
      {categoryStatus === 'success' ? (
        <Fragment>
          <div className="menu-container" onClick={openCategoryDropdown}>
            <BurgerMenu className="navicon" />
          </div>
          {categoryDropdown && <CategoryDropdown />}
        </Fragment>
      ) : (
        <Fragment>
          <div className="menu-container" style={{ opacity: '0.5' }}>
            <BurgerMenu className="navicon" />
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default NavigationBurgermenu
