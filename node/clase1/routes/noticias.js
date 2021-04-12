const express = require('express')
const router = express.Router();
const {getAll, getSingle, create, del} = require('./../models/noticias')

router.get('/all', (req,res) => {
    const noticias = getAll();
    res.json(noticias);
});

router.get('/:id', (req,res)=> {
    console.log (req.params);
    const {id} = req.params;
    const noticia = getSingle(id);
    console.log(noticia);
    res.json(noticia);
});
router.post('/new', (req,res) => {
    console.log(req.body);
    const obj = req.body;
    const data = create(obj);
    console.log(data);
    res.json({id : data});
});

router.delete('/delete/:id',(req,res) => {
    const {id} = req.params;
    del(id);
    res.end();
    
})
module.exports = router;