const { ObjectId } = require('bson');
const express = require('express');
const router = express.Router();
const model = require('../models/usuarios');

const get = (req, res) => 
   model.get({}).then(response => res.json(response)).catch(err => res.status(500).json(err));
const single = (req, res) =>
    model
    .get({
        conditions : { _id : `ObjectId(${req.params.id})`},
        fields : {edad: false},
    })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
const create = (req, res) => {
    model
    .create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
}
router.get('/all', get);
router.get('/single/:id', single);
router.post('/create', create);
module.exports = router;