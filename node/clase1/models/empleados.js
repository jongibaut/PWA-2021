const bd = require('../utils/bd');
const bdService = require('../utils/dbService');

const create = (obj) => bdService.create("empleados", obj);
const createImagen = (obj) => bdService.create("empleados_imagenes", obj);


module.exports = { create, createImagen }