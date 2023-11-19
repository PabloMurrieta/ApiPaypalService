import { Request, Response } from "express";


export const registerpaymend = (req: Request, res: Response) => {
    
    
    const {email_address} = req.body?.resource?.payee;
    const {update_time} = req.body?.resource;

    console.log('info del wehook :', email_address);
    console.log('time :', update_time);

    
    res.json('info del webhook finalizada ')
};
