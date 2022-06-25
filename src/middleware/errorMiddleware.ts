import { Request, Response, NextFunction } from 'express';
import HttpException from './resources/exceptions/httpException';

function errorMiddleware( 
    error:HttpException,
    req:Request,
    res: Response,
    next:NextFunction,
):void {
    const status = error.status || 404;
    const message = error.message || "Something went wrong";
    res.status(status).send({
        status,
        message
    });

}

export default errorMiddleware;




