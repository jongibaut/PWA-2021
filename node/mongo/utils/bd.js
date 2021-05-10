const {MongoClient} = require('mongodb');

const pool = async() => {
    try {
        return ((await MongoClient.connect("mongodb://localhost:27017/")).db("usuarios"));
        
    } catch (e) {
        console.log(e.stack);
    }


}


module.exports = {pool};