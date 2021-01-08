import React, { useEffect, useState } from 'react'

export const Provando = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1); // ✅ Esto no depende en la variable `count` de afuera
            console.log(count);
        }, 1000);
        return () => clearInterval(id);
    }, [count]); // ✅ Nuestro efecto no usa ninguna variable en el ámbito del componente



    return <h1>{count}</h1>;
}