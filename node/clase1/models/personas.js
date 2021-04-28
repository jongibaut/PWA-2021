const bd = require('../utils/bd');
const bdService = require('../utils/dbService');


const getAll = () => bd('personas').select('username', 'pass');
const single = (id) => bd('personas').where('id', id).select('username', 'pass');
const create = async (obj) => {
    try {
    const id = await bdService.create("personas", obj);
    return id;
    }
    catch (e) {
        console.log(e);
    }
}
const modify = ({id = false,obj, confirmacionCorreo = false}) => bd("personas").where({id}).orWhere({confirmacionCorreo}).update(obj);
// UPDATE personas SET habilitado = true WHERE confirmacionCorreo = confirmacionCorreo (uuid) OR id = id

module.exports = {getAll, single, modify, create};