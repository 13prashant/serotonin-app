import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='headerStyle pa2'>
            <div className='logoStyle'>
                <img alt='logo-img' style={{ width: '70px' }} src='https://img.pngio.com/cake-logo-vintage-png-transparent-png-671587-free-download-on-cake-logo-png-840_640.png' />
                <span className='f3'>Serotonin</span>
                <input className='pa2 ba ma2 br3' type='text' placeholder='Search' />

            </div>
            <ul className='leftStyle'>
                <li><a href='#'>Help</a></li>
                <li><a href='#'>Sign In</a></li>
                <li><a href='#'>Cart</a></li>
                <li><a href='#'>Are you <br />a Baker?</a></li>
            </ul>
        </div>
    )
}

export default Header
