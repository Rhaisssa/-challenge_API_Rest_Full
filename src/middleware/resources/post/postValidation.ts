import Joi from 'joi';

const create = Joi.object({

    description: Joi.string().required(), 
    date: Joi.date().required(), 
    user: Joi.number().required(),
});

export default { create };