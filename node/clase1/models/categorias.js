const bd = require('../utils/bd');

const getAll = () => bd('categorias').where({habilitado : true}).select('nombre', 'descripcion');
const single = (id) => bd('categorias').where('id', id).select('nombre', 'descripcion');
// 'id', id === {id} || id = id
const create = (obj) => bd('categorias').insert(obj);
const modify = (id, obj) => bd('categorias').where({id}).update(obj);
module.exports = {getAll, single, create, modify};