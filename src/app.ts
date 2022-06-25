import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from '../src/middleware/resources/utils/interfaces/controllerInterface'; 
import ErrorMiddleware from '../src/middleware/errorMiddleware';

class App {
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;

        this.initConnection();
        this.initMiddleware();
        this.initControllers(controllers);
        this.initErrorHandling();
    }

    private initMiddleware(): void {
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router);
        });
    }

    private initErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }

    private initConnection(): void {
        const { 
            MONGO_USER,
            MONGO_NAME, 
            MONGO_CPF, 
            MONGO_BIRTHDATE, 
            MONGO_EMAIL, 
            MONGO_PASSWORD, 
            MONGO_ADDRESS, 
            MONGO_NUMBER, 
            MONGO_COMPLEMENT, 
            MONGO_CITY, 
            MONGO_STATE, 
            MONGO_COUNTRY, 
            MONGO_ZIPCODE,
            MONGO_PATH
        } = process.env;

        mongoose.connect(
            `mongodb://${MONGO_USER}:
            ${MONGO_NAME}
            ${MONGO_CPF}
            ${MONGO_BIRTHDATE}
            ${MONGO_EMAIL}
            ${MONGO_PASSWORD}
            ${MONGO_ADDRESS}
            ${MONGO_NUMBER}
            ${MONGO_COMPLEMENT} 
            ${MONGO_CITY} 
            ${MONGO_STATE} 
            ${MONGO_COUNTRY} 
            ${MONGO_ZIPCODE}
            ${MONGO_PATH}`
            );
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`The app is listening on ${this.port}`);
        });
    }
}

export default App;
