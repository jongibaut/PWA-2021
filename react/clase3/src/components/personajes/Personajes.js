import React, { useState, useEffect } from 'react';
import Personaje from './../Personaje/Personaje';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        console.log("me ejecuto cuando se monta el componente");
        fetch("https://breakingbadapi.com/api/characters").then((res) => res.json()).then(results => {
            setPersonajes(results);
        }).catch((err) => setError(true));
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    {personajes.map((personaje) => (
                        <Personaje {...personaje} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Personajes;