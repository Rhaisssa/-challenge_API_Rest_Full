import jwt from 'jsonwebtoken';
import User from '../resources/user/userInterface';
import Token from './interfaces/tokenInterface';

export const creatingToken = (user: User): string => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: '1d',
    });
};

export const checkingToken = async (
    token: string
): Promise<jwt.VerifyErrors | Token> => {
    return new Promise((res, rejec) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET as jwt.Secret,
            (err, payload) => {
                if (err) return rejec(err);
                res(payload as Token);
            }
        );
    });
};

export default { creatingToken, checkingToken };