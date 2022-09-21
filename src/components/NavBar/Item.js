
import ItemCount from "./ItemCount"



const Item = ({ info }) => {
    return (
        <div className="container">
            <ul className="card__perfil">
                <img src={info.image} alt="producto" height={150} width={180} />
                <li>{info.tittle}</li>
                <li>{info.category}</li>
                <li>Precio:${info.price}</li>

                <div className="contador"><ItemCount /></div>

            </ul>

        </div>


    )
}

export default Item;