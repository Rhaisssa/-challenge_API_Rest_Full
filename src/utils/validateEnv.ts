import { cleanEnv, str, num, email, port } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['USER'],
        }),
        MONGO_NAME: str(),
        MONGO_CPF: num(), 
        MONGO_BIRTHDATE: num(),  
        MONGO_EMAIL: email(),  
        MONGO_PASSWORD: str(),  
        MONGO_ADDRESS: str(), 
        MONGO_NUMBER: num(),  
        MONGO_COMPLEMENT: str(), 
        MONGO_CITY: str(), 
        MONGO_STATE: str(), 
        MONGO_COUNTRY: str(), 
        MONGO_ZIPCODE: num(),
        MONGO_PATH: str(),
        PORT: port({ default: 3000 }),
    });
}

export default validateEnv;