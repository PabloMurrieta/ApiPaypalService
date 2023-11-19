import { Router } from "express";

import { registerpaymend } from "../controllers/webHookController";

const routerWebhook = Router();

routerWebhook.post('/registerPaymend',registerpaymend)

export default routerWebhook;

