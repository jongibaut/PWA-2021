var express = require('express');
var router = express.Router();
const model = require('../models/personas');
// me deja usar GET POST PUT DELETE

const verify = (req, res) => {
  const datos = {
    confirmacionCorreo : req.params.uuid,
    obj : {habilitado : true}
  }
  model.modify(datos).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/all', (req, res) => {
  res.send('todos los usuarios :D');  
})

router.get('/verify/:uuid', verify);

module.exports = router;
