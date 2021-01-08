import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"

const Rating = () => {

  const [rating, setRating] = useState(0);

  return (

      [...Array(5)].map((star, i) => {

          const ratingValue = i + 1;


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
      })
  )

}


export default Rating;
