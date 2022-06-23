import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from "../src/middleware/resources/utils/interfaces/controller.interface";
import ErrorMiddleware from '@/middleware/error.middleware';
import helmet from 'helmet';
/*Origin Resourse Sharing, CORS provides a Connect/Express middleware that can be used to enable CORS with various options*/ 
/*Morgan is a helper that generates request logs*/
/*Helmet is a helper that secure your Express apps by setting various HTTP headers.*/

class App {
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number){
        this.express = express();
        this.port = port;

        this.initConnection();
        this.initMiddleware();
        this.initControllers(controllers);
        this.initErrorHandling();
    }
    private initMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false}));
        this.express.use(compression());
    }

    private initControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) =>{
            this.express.use('/api', controller.router);
        });
    }
    private initErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }
    private initConnection(): void {
        const { MONGO_USER, MONGO_PATH} = process.env; /*The process.env property returns an object containing the user environment.*/
    
        mongoose.connect(
            'mongodb+srv://${MONGO_USER}:${MONGO_PATH}'
        );
    }
    public listen(): void{
        this.express.listen(this.port, () =>{
            console.log('The App listening it is on port ${this.port}')
        });
    }
}

export default App;
