
import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(0);

    return (
        <div className="container">


            <button className="btn btn-primary m-4" onClick={() => setContador(contador - 1)}> - </button>
            {contador}
            <button className="btn btn-primary m-4" onClick={() => setContador(contador + 1)}> + </button>
            <br />
            <button className="btn btn-success m-3" onClick={() => { console.log(alert("Agregaste el producto al carrito")) }}>Agregar al carrito</button>

        </div>
    )
}


export default ItemCount