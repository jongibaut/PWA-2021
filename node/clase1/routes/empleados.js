const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = { dest: "./public/tmp"};
const upload = multer(config); // multer es un middleware
const service = require('./../services/empleados');

const create = (req, res) => {
    try {
        const idImg = service.createEmp(req.body, req.files);
        res.json({idImg});
    }
    catch (err) {
        res.sendStatus(500);
    }
}

router.post('/create', upload.array("imagen"), create); // "imagen" es el nombre de la key donde estan nuestros files upload.array porque paso varios archivos porque el input del archivo postman me lo pone como multiple en vez de single
module.exports = router;