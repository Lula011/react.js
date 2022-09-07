import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <div className='contador'>
            <ItemCount stock='5' />
        </div>

    )
}


export default ItemListContainer