import { Document } from 'mongoose';

export default interface Post extends Document {

    id: string,
    name: string,
    cpf: number,
    bithdate: Date, 
    email: email, 
    password: string, 
    address: string, 
    number: number, 
    complemett: string, 
    city: string, 
    state: string, 
    country: string, 
    zipcode: number,
}

/*Allows access to mongoose*/