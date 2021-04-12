const express = require('express')
const router = express.Router();

/*
RES (response):
res.json -> me devuelve un JSON con los datos que le pase
res.send -> pagina en blanco con el comentario
res.redirect -> me redirecciona a otro lado de la pagina
res.render -> me renderiza una vista
res.end -> me termina de ejecutar sin pasarme informacion
REQ (request): body, params, etc.
*/
router.get('/all', (req, res) => {
    console.log("productos");
    res.json([{id: 1, nombre: "producto 1", stock: 20, precio:300}])
})

module.exports = router;