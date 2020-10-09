import React from 'react'
import './Cover.css'
import CoverImage from '../assets/CoverImage.jpg'

function Cover() {
    return (
        <div className='coverImageStyle'>
            <img src={CoverImage} />
        </div>
    )
}

export default Cover
