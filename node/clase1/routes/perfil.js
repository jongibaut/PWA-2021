const express = require('express');
const router = express.Router();
const model = require('../models/personas');

const getPerfil = (req, res) => model.single(req.id).then(response =>res.json(response)).catch(err => res.status(500).json(err));


router.get('/', getPerfil);
module.exports = router;