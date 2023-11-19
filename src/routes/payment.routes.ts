import { Router } from "express";


import { cancelOrder,
         captureOrder,
         createOrder } from "../controllers/paymentController";



const routerPayment= Router();

routerPayment.post('/create',createOrder)

routerPayment.get('/capture',captureOrder)

routerPayment.get('/cancel',cancelOrder)


export default routerPayment