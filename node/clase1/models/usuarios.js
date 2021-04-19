const bd = require('../utils/bd');

const getAll = () => bd('usuarios AS U').where({habilitado: 1}).select('U.nombre', 'U.apellido');
const single = (id) => bd('usuarios AS U').where({habilitado: 1, id}).select('U.nombre', 'U.apellido');

const create = (obj) => bd('usuarios').insert(obj);
const modify = (id, obj) => bd('usuarios').where({id}).update(obj);


module.exports = {getAll, single, modify, create}