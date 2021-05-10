const {pool} = require('../utils/bd');

const get = async({conditions = {}, fields = {}}) => {
    try{
    return (await pool()).collection("usuarios").find(conditions, {projection : fields}).toArray();
    }
    catch(e){
        console.error(e);
    }
}
const create = async(obj) => 
    (await pool()).collection("usuarios").insertOne(obj);

const modify = async(id, obj) =>
    (await pool()).collection("usuarios").updateOne( {_id : `ObjectId(${id})`}, {$set : `${obj}`});
module.exports = {get, create, modify};
