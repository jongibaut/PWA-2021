const {v4 : uuid} = require('uuid'); //me genera un id unico (nombre de la imagen)
const fs = require('fs'); //file system maneja archivos dentro de la PC
const allowImgExtension = ["jpg", "png"];

const saveFile = (file, allowExtension, destFolder = "./public/images") => {
    try {
    console.log(file);
    const [type, ext] = file[0].mimetype.split("/"); //[image, jpg]
    if (!allowExtension.includes(ext)) throw "Formato no permitido";
    const uid = uuid();
    const nombre = `${uid}.${ext}`;
    const dir = `${destFolder}/${nombre}`; //./public/images/kdhsajfkhda-fsdafufh9823rb2i.png
    fs.createReadStream(file[0].path).pipe(fs.createWriteStream(dir)); //path = direccion temporal
    // fs.createReadStream(path) -> read.on('data', chunk)  chunk --> las porciones que se van leyendo
    //fs.createWriteStream(dir) -> write.on('data', chunk)
    // con pipe conecto los buffers (elr ead y el write) y a cada chunk lo voy guardando en dir (la direccion de la imagen)
    // el path es temporal entonces lo tengo que borrar
    fs.unlink(file[0].path, (e) => {
        if(e){
            throw "No se puede eliminar";
        }
    });
    // unlink me borra el archivo temporal creado
    return uid;
}
catch(e){
    throw e;
}
}

const imgFile = (file) => {
    return saveFile(file, allowImgExtension);
}

const pdfFile = () => {}

module.exports = {imgFile};