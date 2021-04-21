const Joi = require('@hapi/joi');

const schemas = { 
    create: Joi.object().keys({
        nombre: Joi.string().required().messages({
            "any.required" : "necesito un nombre para el producto",
        }),
        id_categoria : Joi.number().integer().required(),
        precio: Joi.number().min(1).required(),
        stock: Joi.number().min(0).integer().required(),
    }),
    modify: Joi.object().keys({
        id: Joi.number().integer().required(),
        nombre: Joi.string().optional(),
        id_categoria : Joi.number().integer().optional(),
        precio: Joi.number().min(1).optional(),
        stock: Joi.number().min(0).integer().optional(),
    })
}

module.exports = schemas;