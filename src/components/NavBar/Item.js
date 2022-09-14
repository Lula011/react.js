import ItemListContainer from "./ItemListContainer"
import ItemList from "./ItemList"
import Peticiones from './peticiones'
import ItemCount from "./ItemCount"
import ItemDetailContainer from "./ItemDetailContainer"



const Item = ({ info }) => {
    return (
        <div className="container">
            <ul className="card__perfil">
                <img src={info.image} alt="producto" height={150} width={180} />
                <li>{info.tittle}</li>
                <li>Precio:${info.price}</li>

                <div className="contador"><ItemCount /></div>

            </ul>

        </div>


    )
}

export default Item;