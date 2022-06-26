import Joi, { EmailOptions } from 'joi';
import { StringSchemaDefinition } from 'mongoose';
import UserModel from './userModel';
import token from '../../utils/token';


class UserRegistre {
    private user = UserModel;
    /*Registing a new user*/
    public async registring(
        name: string,
        cpf: number,
        birthDate: Date,
        email: string,
        _password: string,
        address: string,
        number: number,
        complement: string,
        city: string,
        state: string,
        country: string,
        zipcode: string,

    ): Promise<string | Error> {
        try {
            const user = await this.user.create({
                name,
                cpf,
                birthDate,
                email,
                _password,
                address,
                number,
                complement,
                city,
                state,
                country,
                zipcode,
            });
            const accessToken = token.creatingToken(user);
            return accessToken;
        } catch (error) {
            throw new Error('Error 404, unable to registing a new user');
        }
    }
    /* Attempt to login a user*/
    public async login(
        email: string,
        password: string
    ): Promise<string | Error> {
        try {
            const user = await this.user.findOne({ email });
            if (!user) {
                throw new Error('Error 404, unable to find user with that email address');
            }
            if (await user.validPassword(password)) {
                return token.creatingToken(user);
            } else {
                throw new Error('Error 404, wrong credentials given');
            }
        } catch (error) {
            throw new Error('Error 404, unable to create user');
        }
    }
}

export default UserRegistre;