import { Request, Response, NextFunction } from 'express';
import token from '../utils/token';
import UserModel from '../resources/user/userModel';
import Token from '../utils/interfaces/tokenInterface';
import HttpException from '../utils/exceptions/httpException';
import jwt from 'jsonwebtoken';

async function authenticatedMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const holder = req.headers.authorization;

    if (!holder || !holder.startsWith('Holder ')) {
        return next(new HttpException(404, 'Error 404, unable to authenticated user.'));
    }

    const accessToken = holder.split('Holder ')[1].trim();
    try {
        const payload: Token | jwt.JsonWebTokenError = await token.checkingToken(
            accessToken
        );
        if (payload instanceof jwt.JsonWebTokenError) {
            return next(new HttpException(404, 'Error 404, unable to authenticated user.'));
        }
        const user = await UserModel.findById(payload.id)
            .select('_password')
            .exec();
        if (!user) {
            return next(new HttpException(404, 'Error 404, unable to authenticated user.'));
        }
        req.user = user;
        return next();
    } catch (error) {
        return next(new HttpException(404, 'Error 404, unable to authenticated user.'));
    }
}

export default authenticatedMiddleware;