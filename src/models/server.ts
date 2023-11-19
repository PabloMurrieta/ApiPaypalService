import express, { Application, json } from 'express'
import path from 'path';
import conectarDB from '../config/db.js';

import routerAuth from '../routes/auth.routes.js';
import routerWebhook from '../routes/webhook.routes.js';
import routerPayment from '../routes/payment.routes.js';

class Server {

    private app: Application;
    private port: string;
    private path = {
        auth         : '/api/auth',
        paymend      : '/api/payment',
        webhook      : '/api/webhook'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8080';

        this.db();
        this.middlewares();
        this.routes();
    }

    async db(){
        try {
            await conectarDB();
        } catch (error:any) {
            return new Error(error)
        }
       
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static(path.resolve('src/public')))

    }
    routes() {
        this.app.use(this.path.auth,routerAuth)
        this.app.use(this.path.paymend,routerPayment)
        this.app.use(this.path.webhook,routerWebhook)

    }
    listen() {
        this.app.listen(this.port, () => {

            console.log(`el servidor estaa corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server