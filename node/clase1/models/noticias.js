const noticias = [
    {
    id : 1,
    titulo: "se termino la pandemia", 
    descripcion: "ya todo el mundo esta vacunado",
    autor: "Marian",
    habilitado: 1
    },
    {
        id: 2,
        titulo: "Messi es el mejor",
        descripcion: "Messi es el mejor jugador del mundo",
        autor: "Leo Messi",
        habilitado : 1
    }
];

const getAll = () => noticias;
const getSingle = (id) => noticias.find((noticia) => noticia.id == id);
const create = (obj) => noticias.push(obj);
const del = (id, habilitado = 0) => {
    index = noticias.findIndex((noticia) => noticia.id == id);
    console.log(index, habilitado)
    noticias[index]["habilitado"] = habilitado;
    console.log(noticias);
}
module.exports = {getAll, getSingle, create, del};