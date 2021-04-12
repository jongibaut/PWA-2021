var express = require('express');
var router = express.Router();
// me deja usar GET POST PUT DELETE

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/all', (req, res) => {
  res.send('todos los usuarios :D');  
})

module.exports = router;
