import React from 'react'
import './AddNewItem.css'

function AddNewItem() {
    return (
        <div style={{ marginTop: '100px' }} className='flex flex-wrap justify-center'>
            <div className='headerStyle pa4 shadow-1'>
                <h2>Your Inventory</h2>
                {/* <BakerInventory /> */}
                <div className='pointer'>
                    <h2>Add a new Item</h2>
                </div>
            </div>
            <div className='grow pa2 ba b--light-pink w5 ma1 br3 shadow-4 flex justify-center items-center'>
                <label className='' for="catagories">Choose a catagory:</label>
                <select className='pl2 pr2 pa1 ba ma2 b--light-blue' style={{ appearance: 'none' }} id='catagories'>
                    <option value='cake'>Cake</option>
                    <option value='cookie'>Cookie</option>
                    <option value='muffins'>Muffins</option>
                    <option value='donut'>Donut</option>
                </select>
            </div>
            <div className='grow pa2 ba b--light-pink w5 ma1 br3 shadow-4 flex flex-wrap justify-center'>
                <label className='ma1' for="title">Add a Title:</label>
                <input className='ba pa2 ma1 b--light-blue' type='text' placeholder='Give a title here.' />
            </div>
            <div className='grow pa2 ba b--light-pink w5 ma1 br3 shadow-4 flex flex-wrap justify-center'>
                <label className='ma1' for="title">Add a Description:</label>
                <input className='ba pa2 ma1 b--light-blue' type='text' placeholder='Type something more.' />
            </div>
            <div className='grow pa2 ba b--light-pink w5 ma1 br3 shadow-4 flex flex-wrap justify-center'>
                <label className='ma1' for="title">Give it a price:</label>
                <input className='ba pa2 ma1 b--light-blue' type='text' placeholder={`Type item's price.`} />
            </div>

        </div>
    )
}

export default AddNewItem
