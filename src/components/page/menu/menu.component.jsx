import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartDropdown } from '../../../store/cart/cart.selector'
import { selectCategoryDropdown } from '../../../store/category/category.selector'
import {
  selectPageSpinner,
  selectCurrentPage,
} from '../../../store/pages/page.selector'

import { fetchPagesAsync } from '../../../store/pages/page.action'

import './menu.styles.scss'

import BeatLoader from 'react-spinners/BeatLoader'
import CoverFocus from '../../cover/cover-focus.componet'
import Collage from '../../layout/collage/collage.component'
import ProductList from '../../layout/productList/productList.component'

export const Menu = () => {
  const dispatch = useDispatch()
  const cartDropdown = useSelector(selectCartDropdown)
  const categoryDropdown = useSelector(selectCategoryDropdown)
  const page = useSelector(selectCurrentPage)
  const pageStatus = useSelector(selectPageSpinner)
  const isFocus = cartDropdown || categoryDropdown

  useEffect(() => {
    dispatch(fetchPagesAsync({ type: 'home' }))
  }, [])

  const renderLayout = (type, layout, id) => {
    switch (type) {
      case 'collage':
        return <Collage key={id} layout={layout} />
      case 'productList':
        return <ProductList key={id} layout={layout} />
    }
  }

  // console.log('page: ', page)
  return (
    <div className="page-container">
      {isFocus && <CoverFocus />}
      {pageStatus === 'loading' && (
        <BeatLoader
          color={'black'}
          size={16}
          style={{
            position: 'absolute',
            top: '50%',
            bottom: '50%',
          }}
        />
      )}
      {pageStatus === 'success' &&
        page.collections.map((layout) =>
          renderLayout(layout.layoutType, layout, layout._id)
        )}
    </div>
  )
}

export default Menu
