const axios = require('axios');

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
    const personajes = await getAsync('https://rickandmortyapi.com/api/character');
    console.log(personajes);
    }
    catch(error){
        console.log(error);
    }
}
//map, filter, find
const getPersonajesNombre = async() => {
    try{
    const personajes = await getAsync('https://rickandmortyapi.com/api/character');
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
//cuando quiero consumir en otra parte del programa un dato de una funcion async await, lo tengo que consumir dentro de otra funcion async await.
getPersonajes();
getPersonajesNombre();