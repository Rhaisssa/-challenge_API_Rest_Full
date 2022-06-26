import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import User from 'resources/user/userInterface';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cpf: {
            type: Number,
            required: true,
        },
        birthDate:{
            type: Date,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        complement: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        zipcode: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const hash = await bcrypt.hash(this.password, 6);
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (
    password: string
): Promise<Error | boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<User>('User', UserSchema);