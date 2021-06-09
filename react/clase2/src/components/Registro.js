import React, { useState } from 'react';
import Error from './Error';
const shortid = require('shortid');

const Registro = ({agregarUsuarios}) => {
    const[usuario, setUsuario] = useState({
        nombre: '', 
        apellido: '',
        departamento: '',
        nacionalidad: ''
    });
    const[error, setError] = useState(false);
    const handlerInput = (e) => {
        const {value : input} = e.target;
        setUsuario({
            ...usuario,
            [e.target.id] : input
        })
    }
    const registro = (e) => {
        e.preventDefault();
        if(usuario.nombre.trim() === "" || usuario.apellido.trim() === "" || usuario.departamento.trim() === "" || usuario.nacionalidad.trim() === ""){
            setError(true);
            return;
        }
        const {nombre, apellido, departamento, nacionalidad} = usuario;
        const usuarioAgregar = {
            id: shortid.generate(),
            nombre,
            apellido,
            departamento,
            nacionalidad
        }
        agregarUsuarios(usuarioAgregar);
        setUsuario({
            nombre: "", 
            apellido: "",
            departamento: "",
            nacionalidad: ""
        })
        
    }
    return ( 
        <>
        <form onSubmit={registro}>
        <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" className="form-control" id = "nombre" onChange={handlerInput} value= {usuario.nombre}></input>
        </div>
        <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" className="form-control" id = "apellido" onChange={handlerInput}value= {usuario.apellido}></input>
        </div>
        <div className="form-group">
        <label htmlFor="departamento">Departamento</label>
        <input type="text" className="form-control" id = "departamento" onChange={handlerInput} value= {usuario.departamento}></input>
        </div>
        <div className="form-group">
        <label htmlFor="nacionalidad">Nacionalidad</label>
        <input type="text" className="form-control" id = "nacionalidad" onChange={handlerInput} value= {usuario.nacionalidad}></input>
        </div>
        <div class="d-grid gap-2 mt-2">
        <button type="submit" className="btn btn-info">Enviar</button>
        </div>
        </form>
        {error ? <Error  mensaje = "Los campos son obligatorios"/> : null}
        </>
    );
}
 
export default Registro;