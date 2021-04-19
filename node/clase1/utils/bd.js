const knex = require('knex')({
    client:'mysql',
    connection: {
        host: process.env.BD_HOST || 'localhost',
        user: process.env.BD_USER || 'root',
        password: process.env.BD_PASSWORD || '',
        database: process.env.BD_DB || 'trabajo',
        pool : {min : 1, max : 10}
    }
});

module.exports = knex;