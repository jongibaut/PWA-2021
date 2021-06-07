//extensiones: simple react-snippets, es7/react y tabnine
//sfc
const list = (hobbies) => {
    return(
        <ul>
            {hobbies.map((hobbie, index) => (
                <li key={hobbie + index} className="text-white ">{hobbie}</li>
            ))}
        </ul>
    )
}

const Alumno = ({nombre, apellido, edad, hobbies}) => {
    return ( 
        <div>
        <h1 className="text-white ">Nombre: {nombre}</h1>
        <h2 className="text-white ">Apellido: {apellido}</h2>
        <h3 className="text-white ">Edad: {edad}</h3>
        <p className="text-white ">Hobbies: </p>{hobbies ? list(hobbies) : '-'}
        <hr />
        </div>
     );
}
 
export default Alumno;