const fs = require('fs');
const privateKey = fs.readFileSync('./keys/private.pem');
const JWT = require('jsonwebtoken');
const logeado = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        console.log(authorization);
        const {id} = JWT.verify(authorization, privateKey);
        req.id = id;
        next();
        //req.headers.authorization
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = {logeado};