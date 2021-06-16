import React from 'react';
const Personaje = ({ char_id, name, birthday, status, nickname, img }) => {
    return ( 
        <div className="col-4 mt-4" key={char_id}>
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Alias : {nickname}</p>
                        <p className="card-text">Cumpleanios : {birthday}</p>
                        <p className="card-text">Estado : {status}</p>
                    </div>
            </div>
      </div>
     );
}
 
export default Personaje;