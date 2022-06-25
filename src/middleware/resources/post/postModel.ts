import { Schema, model } from 'mongoose';
import Post from '../src/middleware/resources/post/postInterface.ts';

const PostSchema = new Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true},
        cpf, 
        bithdate:, 
        EMAIL, 
        PASSWORD, 
        ADDRESS, 
        NUMBER, 
        COMPLEMENT, 
        CITY, 
        STATE, 
        COUNTRY, 
        ZIPCODE,
    },
    { timestamps: true }
);

export default model<Post>('Post', PostSchema);
