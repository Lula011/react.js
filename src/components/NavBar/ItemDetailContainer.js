import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail';




const productosDetail = {
    id: '1',
    tittle: 'Planta Monstera',
    price: 2000,
    image: 'https://t2.ev.ltmcdn.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600.jpg',
    cuotas: '3 y 6 Cuotas Sin Interés',
    descripcion: 'Planta enredadera con caida de 1 metro.'

};


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        getDetail.then(detail => {
            setDetail(detail);
        })
    }, [])
    const getDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosDetail)
        }, 2000)
    });

    return (
        <>
            <ItemDetail detail={detail} />
        </>

    )
}

export default ItemDetailContainer;