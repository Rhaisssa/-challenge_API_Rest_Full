import { Router, Request, Response, NextFunction } from 'express';
import Controller from 'utils/interfaces/controllerInterface';
import HttpException from 'utils/exceptions/httpException';
import validationMiddleware from 'middleware/validationMiddleware';
import validate from '/resources/user/userValidation';
import UserService from '/resources/user/userService';
import authenticated from '/middleware/authenticatedMiddleware';

class UserController implements Controller {
    public path = '/user';
    public router = Router();
    private UserService = new UserService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}/register`,
            validationMiddleware(validate.register),
            this.register
        );
        this.router.post(
            `${this.path}/login`,
            validationMiddleware(validate.login),
            this.login
        );
        this.router.get(`${this.path}`, authenticated, this.getUser);
    }

    private register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { name, cpf, birthDate, email, address, number, complement, city, state, country, zipcode } = req.body;

            const token = await this.UserService.register(
                name,
                cpf,
                birthDate,
                email,
                address,
                number,
                complement,
                city,
                state,
                country,
                zipcode,
                'user'
            );

            res.status(204).json({ token });
        } catch (error) {
            next(new HttpException(404, error.message));
        }
    };

    private login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { email, password } = req.body;
            const token = await this.UserService.login(email, password);
            res.status(204).json({ token });
        } catch (error) {
            next(new HttpException(404, error.message));
        }
    };

    private getUser = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Response | void => {
        if (!req.user) {
            return next(new HttpException(404, 'It is not a logged in user'));
        }

        res.status(204).send({ data: req.user });
    };
}

export default UserController;