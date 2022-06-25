import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../utils/interfaces/controllerInterface';
import HttpException from '../utils/exceptions/httpException';
import validationMiddleware from 'middleware/validationMiddleware';
import validate from './postValidation';
import PostService from '../post/postService';

class PostController implements Controller {
    public path = '/task';
    public router = Router();
    private PostService = new PostService();
    constructor() {
        this.initRoutes();
    }
    private initRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
    }
    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { description, date, user } = req.body;
            const post = await this.PostService.create(description, date, user);
            res.status(204).json({ post });
        } catch (error) {
            next(new HttpException(404, 'Cannot create a new post'));
        }
    };
}

export default PostController;