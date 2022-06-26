import Joi from 'joi';
import Validade from 'validate-cpf-joi';

const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18));

const register = Joi.object({
    id: Joi.number().integer(),

    name: Joi.string().min(3).max(30).required(),

    cpf: Validade.document().cpf().min(11).required(),

    birthdate: Joi.date().max(cutoffDate).min(8).required(),

    email: Joi.string().trim().email().min(1).required(),

    password: Joi.string().min(6).required(),

    address: Joi.string().min(1).required(),

    number: Joi.string().min(1).required(),

    complement: Joi.string().min(1).required(),

    city: Joi.string().min(1),

    state: Joi.string().min(1).required(),

    country: Joi.string().min(1).required(),

    zipcode: Joi.number().min(8).max(8).required(),
});

const login = Joi.object({
    email: Joi.string().trim().email().min(1).required(),
    password: Joi.string().required(),
});

export default { register, login };
