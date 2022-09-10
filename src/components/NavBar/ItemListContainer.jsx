import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import getData from './peticiones'

const ItemListContainer = ({ productos }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(dataDetails => {
            setData(dataDetails);
        })
    }, [])


    return (
        <div

            className='contador'>
            <ItemCount stock='5' />
            <ItemList data={data} />
        </div>

    )
}



export default ItemListContainer