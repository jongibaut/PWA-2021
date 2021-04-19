const bd = require('../utils/bd');

const getALL = () => bd('producto as P').join('categorias as CAT', 'CAT.id', 'P.id_categoria').where({"P.habilitado" : true}).select('P.nombre', 'CAT.nombre as nombreCategoria', 'P.precio', 'P.stock');
    // SELECT * FROM producto WHERE habilitado = 1
    // where en knex puede ser por obejto o escrito ({habiliado : 1}, ("habilitado", 1))

const create = (obj) => bd('producto').insert(obj);
    //INSERT INTO producto SET obj

const single = (id) => bd('producto').where({"habilitado" : 1, id}).select('*');
    //SELECT * FROM producto WHERE habilitado = 1 AND id = id

const modify = (id, obj) => bd('producto').where({id}).update(obj);

module.exports = {getALL, create, single, modify}