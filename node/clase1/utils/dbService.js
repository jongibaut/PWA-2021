const bd = require('./bd');

const create = (tableName, obj) => bd(tableName).insert(obj);
const modify = (tableName, id, obj) => bd(tableName).where({id}).update(obj);

module.exports = {create, modify};