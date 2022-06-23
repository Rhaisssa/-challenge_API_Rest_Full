import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from "@/utils/interfaces/controller.interface";
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
}
