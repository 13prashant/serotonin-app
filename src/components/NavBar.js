import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBarStyle pa4'>
            <div className='pointer'>
                {/* <img alt='logo-img' style={{ width: '70px' }} src='https://img.pngio.com/cake-logo-vintage-png-transparent-png-671587-free-download-on-cake-logo-png-840_640.png' /> */}
                <span className='f3 ma2'>Serotonin</span>
            </div>
            <input className='searchStyle pa2 ba br3 ma2' type='text' placeholder='Search' />
            <div className='rightStyle f5'>
                <div className='navLinkStyle'>
                    <Link to='#'>
                        <span>Help</span>
                    </Link>
                </div>
                <div className='navLinkStyle'>
                    <Link to='#'>
                        <span>Sign In</span>
                    </Link>
                </div>
                <div className='navLinkStyle'>
                    <Link to='#'>
                        <span>Cart</span>
                        <span>0</span>
                    </Link>
                </div>
                <div className='navLinkStyle'>
                    <Link className='bakerStyle' to='/addnewitem'>
                        <span>Are you </span>
                        <span>a Baker?</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
