import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '../src/middleware/resources/utils/interfaces/validateEnv';
import App from './app';
import PostController from '../src/middleware/resources/post/postController';
import UserController from '..src/user/user.controller';

validateEnv();

const app = new App(
    [new PostController(), new UserController()],
    Number(process.env.PORT)
);

app.listen();