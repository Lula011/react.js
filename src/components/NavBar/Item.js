import ItemListContainer from "./ItemListContainer"
import ItemList from "./ItemList"
import Peticiones from './peticiones'


const Item = ({ info }) => {
    return (
        <div className="container">
            <div className="img__">
                <img src={info.image} alt="" height={150} width={180} />
            </div>
            <p>{info.tittle}</p>
            <p>{info.price}</p>
        </div>
    )
}

export default Item