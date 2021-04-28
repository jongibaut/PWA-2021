const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const model = require("./../models/personas");
const {validateModify} = require("../middlewares/personas");

const get = (req, res) => {
    model.getAll().then((response) => res.json(response)).catch((err) => res.status(500).json(err));
} 
const single = (req, res) => {
    model.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}
const modify = (req, res) => {
    if (req.body.pass){
        req.body.pass = sha1(req.body.pass);
    }
    model.modify(req.params.id, req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err))
}
router.get('/all', get);
router.get('/single/:id', single);
router.put('/modify/:id',validateModify, modify);

module.exports = router;