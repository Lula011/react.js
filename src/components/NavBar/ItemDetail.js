
import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
    return (

        <div className="contenedorDetail">
            <ul className="card__1">
                <img src={detail.image} alt="productosDetail" />
                <h1>{detail.tittle}</h1>
                <li>{detail.descripcion}</li>
                <li>Precio:${detail.price}</li>
                <li>{detail.cuotas}</li>

                <div className="contador"><ItemCount /></div>
            </ul>
        </div>

    )
}

export default ItemDetail;