import Joi from 'joi';
import Validade from 'validate-cpf-joi';

const now = Date.now();
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18));

const register = Joi.object({
    id: Joi.number().integer(),

    name: Joi.string().max(30).required(),

    cpf: Validade.document().cpf().required(),
    
    birthdate: Joi.date().max(cutoffDate).required(),

    email: Joi.string().min(3).required().email(),

    address: Joi.string().required(),

    number: Joi.string().required(),

    complement: Joi.string().required(),

    password: Joi.string().min(6).required(),


});

const login = Joi.object({
    email: Joi.string().required(),

    password: Joi.string().required(),
});

export default { register, login };


/*app.post('/',(req,res) => {

    const schema = Joi.object().keys({
       email: Joi.string().trim().email().required(),
       pass: Joi.string().min(5)
    });
  
    Joi.validate(req.body,schema,(err,results) => {
    if(err){
      res.send('An Error has occured');
      console.log(err);
    }else{
    res.send('Success');
    console.log(req.body);
    }
  
    });
  
  });*/