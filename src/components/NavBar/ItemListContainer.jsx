
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

        <>
            <ItemList data={data} />
        </>

    )
}



export default ItemListContainer;