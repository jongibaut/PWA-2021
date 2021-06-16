import React from 'react'
import useGet from './../../utils/useHttp'
import Personaje from './Personaje';

const Personajes = () => {
    const [personajes, cargando] = useGet({ url: "https://breakingbadapi.com/api/characters" });
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center text-warning"> Personajes de Breaking Bad</h1>
                </div>
                {cargando ? (
                    <div className="col-12 justify-content-center">
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    personajes.map(personaje => (
                        <Personaje key={personaje.id_char} {...personaje} />
                    ))
                )}
            </div>
        </>
    );
}

export default Personajes;