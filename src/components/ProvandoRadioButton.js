import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"

const ProvandoRadioButton = ({ title = "DEFENSA" }) => {

    const [rating, setRating] = useState(0);

    const [items, setItems] = useState([
        { id: 1, it: "barrida" },
        { id: 2, it: "entradas" },
        { id: 3, it: "intercepciones" },
        { id: 4, it: "marca" }
    ]);

    const [barrida, setBarrida] = useState('barrida');


    const star = () => {
        return (

            [...Array(5)].map((star, i) => {

                const ratingValue = i + 1;


                return <label key={i}>

                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    //onClick={() => console.log('hola')}
                    />
                    <FaStar
                        className="star"
                        size={40}
                        color={ratingValue <= rating ? "yellow" : " black"}
                    />
                </label>;
            })

        )
    }

    return (
        <div>
            <h1 className="text-center">{`${title} (*4)`}</h1>

            <>
                { items.map((item, i) => {
                    return (
                        <h1 key={i}>{item.it}{star()}</h1>
                    )
                })}
            </>




        </div>
    )
}

export default ProvandoRadioButton;