import { Document } from 'mongoose';

export default interface Post extends Document {

    description: string,
    date: Date, 
    user: number;    
}

/*Allows access to mongoose*/