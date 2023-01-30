import { Route, Routes } from 'react-router-dom'

import Product from '../../components/product/product.component'

export const ProductRoute = () => {
  return (
    <Routes>
      <Route path=":sku" element={<Product />} />
    </Routes>
  )
}

export default ProductRoute
