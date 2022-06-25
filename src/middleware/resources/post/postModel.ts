import { Schema, model } from 'mongoose';
import Post from './postInterface';

const PostSchema = new Schema(
    {
        description: {type: String, requered: true},
        date: {type: Date, requered: true},
        user: {type: Number, requered: true}
    },
    { timestamps: true }
);

export default model<Post>('Post', PostSchema);
