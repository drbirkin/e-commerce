import { useEffect, useState } from 'react'

export const ProductImages = ({
  product: {
    images,
    currentSku: { productname, sku },
    skuUnit: skuParams,
  },
}) => {
  const [imageSrc, setSrc] = useState('')

  // console.log('reset image', skuParams)
  useEffect(() => {
    setSrc('')
  }, [skuParams])

  const selectImage = (image) => setSrc(image)
  return (
    <div className="product-images">
      <div className="product-image-slides">
        {images.map((image, index) => (
          <img
            src={`${image}`}
            alt={`${productname}`}
            key={index + 'productslide'}
            onClick={selectImage.bind(this, image)}
          />
        ))}
      </div>
      <div className="product-images-display">
        <img
          src={`${imageSrc ? imageSrc : images[0]}`}
          alt={`${productname}`}
        />
      </div>
    </div>
  )
}

export default ProductImages
