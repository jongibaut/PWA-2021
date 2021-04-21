const schemas = require('./schemas/personas');

const validateCreate = (req, res, next) => {
    const {error, value} = schemas.create.validate(req.body);
    console.log(error);
    error ? res.status(422).json({message : error.details[0].message}) : next();

}
const validateModify = (req, res, next) => {
    const obj = req.body;
    obj.id = req.params.id;

    const {error, value} = schemas.modify.validate(obj);
    console.log(error);
    error ? res.status(422).json({message : error.details[0].message}) : next();
}

module.exports = {validateCreate, validateModify};