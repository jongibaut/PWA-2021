const bd = require('../utils/bd');
const bdService = require('../utils/dbService');

const getAll = () => bd('categorias').where({habilitado : true}).select('nombre', 'descripcion');
const single = (id) => bd('categorias').where('id', id).select('nombre', 'descripcion');
// 'id', id === {id} || id = id
const create = (obj) => bdService.create("categorias", obj);
const modify = (id, obj) => bdService.modify("categorias", id, obj);
module.exports = {getAll, single, create, modify};