import React from 'react'

const Slide = ({ image, imageWidth }) => {
    const styles = {
        width: imageWidth,
        height: '300px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    return <div className="slide" style={styles}>

    </div>
}

export default Slide