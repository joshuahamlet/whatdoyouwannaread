import React, {useState} from 'react'

const LoadSmoothImg = ({src, alt}) => {
    const [imageLoaded, setImageLoaded]=useState(false)
    const imageVisible = { transition: 'opacity 1s', opacity: '1', objectFit: "cover" }
    const imageHidden = { transition: 'opacity 1s', opacity: '0', objectFit: "cover" }

    return (
        <img
          src={src}
          alt={alt}
          style={{height: "100%"}}
          className={ imageLoaded ? imageVisible : imageHidden }
          onLoad={()=> setImageLoaded(true)}
        />
    )
}

export default LoadSmoothImg