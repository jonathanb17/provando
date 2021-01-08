import React, { useState } from 'react';
import Rating from './Rating'

const ProvandoRadioButton = ({ title = "DEFENSA" }) => {


    const [items, setItems] = useState([
        { id: 1, it: "barrida" },
        { id: 2, it: "entradas" },
        { id: 3, it: "intercepciones" },
        { id: 4, it: "marca" }
    ]);

    const [barrida, setBarrida] = useState('barrida');

    return (
        <div>
            <h1 className="text-center">{`${title} (*4)`}</h1>

            <>
                { items.map((item, i) => {
                    return (
                        <h1 key={i}>{item.it}<Rating></Rating></h1>
                    )
                })}
            </>
            
        </div>
    )
}

export default ProvandoRadioButton;
