import React from 'react'
import './Cake.css';

function Cake() {
    return (
        <div>
            <div className='cardStyle w5 dib ma3 shadow-1 br3 pa2 bg-white'>
                <img alt='cake-img' className='br3' src='https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg' />
                <div className='ma2'>
                    <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Royal Chocolate</p>
                    <p style={{ fontSize: '12px' }}>Filled with rich lava chocolates.</p>
                    <p style={{ fontSize: '17px' }}> &#8377; 650</p>
                </div>
                <div className='flex justify-center justify-between ma2'>
                    <div className='flex items-center'>
                        <img alt='baker-img' className='br4 h2 w2 dib' style={{ objectFit: 'cover' }} src='https://static.onecms.io/wp-content/uploads/sites/24/2018/11/gettyimages-639897672-2000.jpg' />
                        <div className='ma2'>
                            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Baked by</p>
                            <p style={{ fontSize: '12px' }}>Kiyara</p>
                        </div>
                    </div>
                    <div className="btnStyle ph3">
                        <a className="f6 link dim br1 ph3 pv2 dib white bg-light-purple" href="#">ADD</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cake