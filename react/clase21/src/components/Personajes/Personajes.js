import React from 'react';
import {useGet} from './../../utils/useHTTP'
const Personajes = () => {
    const [personajes, error] = useGet({ url: 'https://rickandmortyapi.com/api/character' });
    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    {error ? (<h2 className="text-danger">HUBO UN ERROR</h2>)
                        : personajes.map((personaje) => (
                            <div className="col-4 mt-4" key={personaje.id}>
                                <div className="card">
                                    <img src={personaje.image} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h4 className="card-title">{personaje.name}</h4>
                                        <p className="card-text">Estado : {personaje.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Personajes;