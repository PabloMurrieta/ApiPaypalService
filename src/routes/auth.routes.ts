import { Router } from "express";
import { Request, Response } from "express";


import { login, 
        register } from "../controllers/authController";


import { registerSchema } from "../config/validators/authValidator";
import validateRequest from "../middlewares/requestValidation";



const routerAuth = Router();

routerAuth.post('/register',validateRequest(registerSchema),register);

routerAuth.post('/login',login);



export default routerAuth;