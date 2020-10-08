import React from 'react'
import './WelcomeNav.css'

function WelcomeNav() {
    return (
        <div className='welcomeStyle pa4 main-color'>
            <div className='best-selling ma1 grow'>
                <img className='thumbnail-img' alt='best-selling-img' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/anb55q8w9c8z5ogtis5m' />
            </div>
            <div className='best-seller ma1 grow'>
                <img className='thumbnail-img' alt='best-selling-img' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/anb55q8w9c8z5ogtis5m' />
            </div>
            <div className='baker ma1 grow'>
                <img className='thumbnail-img' alt='best-selling-img' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/anb55q8w9c8z5ogtis5m' />
            </div>
            <div className='discount ma1 grow'>
                <img className='thumbnail-img' alt='best-selling-img' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/anb55q8w9c8z5ogtis5m' />
            </div>
        </div>
    )
}

export default WelcomeNav
