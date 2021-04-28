const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.pem');
const JWT = require('jsonwebtoken');
const logeado = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        console.log(authorization);
        const {id} = JWT.verify(authorization, publicKey); // obj = {id : user.id}
        req.id = id;
        next();
        //req.headers.authorization
    } catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}

module.exports = {logeado};