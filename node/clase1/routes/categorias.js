const express = require("express");
const router = express.Router();
const model = require("./../models/categorias");

const get = (req, res) => {
    model.getAll().then((response) => res.json(response)).catch((err) => res.status(500).json(err));
    // SQL devuele row data packet (ARRAY DE OBJETOS [{}])
}
const getSingle = (req, res) => {
    model.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}
const create = (req, res) => {
    model.create(req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}
const modify = (req, res) => {
    model.modify(req.params.id, req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}


router.get('/all', get);
router.get('/single/:id', getSingle);
router.post('/new', create);
router.put('/modify/:id', modify);
module.exports = router;