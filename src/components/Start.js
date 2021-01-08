import React, { useState } from 'react'

import { FaStar } from "react-icons/fa"


const Start = () => {

    const [rating, setRating] = useState(null);


    return (
        <div className="ml-5 mt-5">

            <h1 className="text-center">Defensa(4 *)</h1>
            <h2 className="hola">Barrida</h2>
            {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1; // el valor que va a tener es de 1 hasta el 5
                return <label key={i}>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                        className="star"
                        size={40}
                        color={ratingValue <= rating ? "yellow" : " black"}
                    />
                </label>;
            })}
        </div>
    )
}

export default Start;
