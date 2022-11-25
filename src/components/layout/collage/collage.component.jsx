import './collage.styles.scss'
import '../layouts.styles.scss'
export const Collage = ({ layout }) => {
  //   console.log(layout)
  const {
    classNames: {
      headingClass,
      headingContainer,
      subHeadingClass,
      shopButtonClass,
      blogButtonClass,
      collageContainer,
      imageClass,
      buttonContainer,
      contentContainer,
      contentWrapper,
      imageContainer,
    },
    button: {
      // ? page types
      shop,
      blog,
    },
    images,
    heading,
    subHeading,
  } = layout
  return (
    <div className={`collage-container ${collageContainer}`}>
      <div className={`content-container-wrapper ${contentWrapper}`}>
        <div className={`content-container ${contentContainer}`}>
          <div className={`titles ${headingContainer}`}>
            <p className={`${headingClass}`}>{heading}</p>
            <p className={`${subHeadingClass}`}>{subHeading}</p>
          </div>
          <div className={`button-container ${buttonContainer}`}>
            {/* ? as seperate components */}
            {shop && (
              <button className={`${shopButtonClass}`}>
                <span>{shop.buttonText}</span>
              </button>
            )}
            {blog && (
              <button className={`${blogButtonClass}`}>
                <span>{blog.buttonText}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={`image-container ${imageContainer}`}>
        <img
          src={`${images[0]}`}
          className={`${imageClass}`}
          alt={`${heading}`}
        />
      </div>
    </div>
  )
}

export default Collage
