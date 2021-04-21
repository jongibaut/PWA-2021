const Joi = require('@hapi/joi');
const messageNombre = {
    "any.required" : "el nombre es required",
    "string.max" : "te apsaste del amximo de caracteres",
    "string.min" : "nercesitas al menos dos caracteres"
}
const schemas = {
    create : Joi.object().keys({
        nombre: Joi.string().min(3).max(40).required().messages(messageNombre),
        apellido: Joi.string().required().messages({
            "any.required" : "el apellido es required",
        }),
    }),
    modify: Joi.object().keys({
        id: Joi.number().integer().required().messages({
            "any.required" : "necesito un id",
        }),
        nombre: Joi.string().min(3).max(40).optional(),
        apellido: Joi.string().optional(),
    })
}

module.exports = schemas;