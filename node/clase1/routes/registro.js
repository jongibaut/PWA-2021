const express = require('express');
const router = express.Router();
const model = require('../models/personas');
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const {validateCreate} = require('../middlewares/personas');
const { send } = require('../services/mail');

const create = async (req, res) => {
    try {
        const {username, pass, mail} = req.body; // lo mismo que poner const username = req.body.username;, const pass = req.body.pass; y const mail = req.body.mail;
        const nuevo = {
            username,
            pass : sha1(pass),
            mail,
            confirmacionCorreo : uuid()
        };
        
        const newUser = await model.create(nuevo);
        const mailinfo = {
            to: mail,
            subject: "Gracias por registrarte :D",
            html : `<a href = "${process.env.URL}/users/verify/${nuevo.confirmacionCorreo}">Link magico de registro para ${username}</a>`
        }
        const mensaje = await send(mailinfo);
        res.json(mensaje);
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
}

router.post('/',validateCreate, create);
module.exports = router;