import React from "react";
import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(0);
    let n = 5

    return (
        <div className="container">

            <p className="cantidad m-3"> Cantidad</p>

            <button className="btn btn-primary m-4" onClick={() => setContador(contador + 1)}> + </button>

            {contador}


            <button className="btn btn-primary m-4" onClick={() => setContador(contador - 1)}> - </button>

            <br />

            <button className="btn btn-success m-3" onClick={() => (contador)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount