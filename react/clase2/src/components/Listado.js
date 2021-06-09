import React from 'react';

const Listado = ({ usuarios }) => {
    console.log(usuarios);
    return ( 
        <>
        <table className="table text-white">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Departamento</th>
            <th scope="col">Nacionalidad</th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map(
            ({id, nombre, apellido, departamento, nacionalidad}) =>(
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{nombre}</td>
                            <td>{apellido}</td>
                            <td>{departamento}</td>
                            <td>{nacionalidad}</td>
                        </tr>
                )
        )}
         </tbody>
        </table>
        </>
     );
}
 
export default Listado;