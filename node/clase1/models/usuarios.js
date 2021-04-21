const bd = require('../utils/bd');
const bdService = require('../utils/dbService');

const getAll = () => bd('usuarios AS U').where({habilitado: 1}).select('U.nombre', 'U.apellido');
const single = (id) => bd('usuarios AS U').where({habilitado: 1, id}).select('U.nombre', 'U.apellido');

const create = (obj) => bdService.create("usuarios", obj);
const modify = (id, obj) => bdService.modify("usuarios", id, obj);


module.exports = {getAll, single, modify, create}