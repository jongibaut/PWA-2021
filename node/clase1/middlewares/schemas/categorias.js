const Joi = require('@hapi/joi');

const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().required(),
        descripcion: Joi.string().required(),
    }),
    modify: Joi.object().keys({
        id: Joi.number().integer().required(),
        nombre: Joi.string().optional(),
        descripcion: Joi.string().optional(),
    })
}

module.exports = schemas;