const bd = require('./bd');

const create = (tabla, obj) => bd(tabla).insert(obj);
const modify = (tabla, id, obj) => bd(tabla).where({id}).update(obj);

module.exports = {create, modify};