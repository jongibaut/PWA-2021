const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';
const get = (url) => {
    const data = axios.get(url).then(res => console.log(res.data.results)).catch(e => console.log(e));
    //return data;
    //console.log(data);
}

const getAsync = async (url) => {
    try {
    const data = await axios.get(url);
    return data;
    }
    catch(error){
        console.log(error)
    }
}
const getPersonajes = async() => {
    try{
    const personajes = await getAsync(URL);
    console.log(personajes);
    }
    catch(error){
        console.log(error);
    }
}
//map, filter
const getPersonajesNombre = async() => {
    try{
    const personajes = await getAsync(URL);
    /*personajes.data.results.forEach(personaje => {
        nombreP.push(personaje.name);
    });*/
    let nombreP = personajes.data.results.map(personaje => personaje.name);
    console.log(nombreP);
    }
    catch(error){
        console.log(error);
    }
}
const getGenero = async (gender = "Female") => {
    try {
    const info = await getAsync(URL);
    const personajes = info.data.results;
    const filtrado = personajes.filter(personaje => personaje.gender === gender);
    console.log(filtrado);
    }
    catch(e){
        console.log(e);
    }
}
const getSingle = async(id) => {
    try{
    const info = await getAsync(`${URL}/${id}`); // URL + '/' + id
    const personaje = info.data;
    //console.log(personaje);
    const {species, name, status} = personaje;
    console.log(name, species, status);
    }
    catch(e){
        console.error(e);
    }

}
//cuando quiero consumir en otra parte del programa un dato de una funcion async await, lo tengo que consumir dentro de otra funcion async await.
getPersonajes();
getPersonajesNombre();
getGenero();
getSingle(1);