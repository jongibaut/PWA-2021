const express = require('express');
const router = express.Router();

const getPerfil = (req, res) =>{
    console.log(req.id);
    res.end();
}

router.get('/', getPerfil);
module.exports = router;