
import ItemList from './ItemList'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from './productos'


const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const getData = () => new Promise((res) => {
            setTimeout(() => {
                res(productos)
            }, 1000)
        })
        if (categoryId) {
            getData().then(res => setData(res.filter((res) => res.category === categoryId)))
        } else {
            getData().then(res => setData(res))
        }
    }, [categoryId])
    return (

        <>
            <ItemList data={data} />
        </>

    )
}



export default ItemListContainer;