const bd = require('../utils/bd');

const isLogged = (username, pass) => bd("personas").where({username, pass}).select("id", "username", "habilitado");

module.exports = {isLogged};