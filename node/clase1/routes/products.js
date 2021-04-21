const express = require("express");
const router = express.Router();
const model = require("./../models/products");
const {validateCreate, validateModify} = require('./../middlewares/products');
// un getALL y un singles un alta de productos y un modificar productos

const all = (req, res) => {
  model.getALL().then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}
const single = (req,res) => {
    model.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}
const create = (req,res) => {
    const obj = req.body;
    model.create(obj).then(response => res.json(response)).catch((err) => res.status(500).json(err));
}
const modify = (req,res) => {
    const obj = req.body;
    model.modify(req.params.id, obj).then(response => res.json(response)).catch((err) => res.status(500).json(err));
}
router.get('/all', all);
router.get('/single/:id', single);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify)
module.exports = router;