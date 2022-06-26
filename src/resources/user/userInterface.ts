import { Document } from 'mongoose';

export default interface User extends Document {
    name: string;
    cpf: number;
    birthDate: Date;
    email: string;
    password: string;
    address: string;
    number: number;
    complement: string;
    city: string;
    state: string;
    country: string;
    zipcode: number;
    validPassword(User: any): Promise<Error | boolean>;
}