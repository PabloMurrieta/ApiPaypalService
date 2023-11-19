import { Request, Response, json } from "express";
import axios from "axios";
import tokenP from "../utils/tokenPaypal";


export const createOrder = async (req: Request, res: Response) => {

    const amount = req.body;

    const order = {

        "intent": "CAPTURE",
        "purchase_units": [{ "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b", "amount": { "currency_code": "USD", "value": "1.00" } }],
        "description": "maus",
        "payment_source": {

            "paypal": {
                "experience_context": {
                    "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                    "brand_name": "Mycompani",
                    "locale": "en-US",
                    "landing_page": "LOGIN",
                    "shipping_preference": "NO_SHIPPING",
                    "user_action": "PAY_NOW",
                    "return_url": `${process.env.DOMAIN}/api/paymend/capture`,
                    "cancel_url": `${process.env.DOMAIN}/api/paymend/cancel`
                }
            }
        }
    }

    //token
    const access_token = await tokenP();

    const { data } = await axios.post(`${process.env.PAYPAL_PAI_URL}/v2/checkout/orders`, order,
        {
            headers: {

                Authorization: `Bearer ${access_token}`
            }
        }
    );
    res.status(200).json(data)
}

export const captureOrder = async (req: Request, res: Response) => {

    const { token, PayerID } = req.query;
    const access_token = await tokenP();
    console.log('datos de compra');
    try {
        
        const response = await axios.post(
            `${process.env.PAYPAL_PAI_URL}/v2/checkout/orders/${token}/capture`,
            {},
            {
                headers: { 
                    Authorization: `Bearer ${access_token}`
                }
            }
        );
        return res.redirect('/paymend.html');

    } catch (error) {
        return res.status(500).json({msg:error})
    }


}


export const cancelOrder = (req: Request, res: Response) => {

    res.redirect('/');

}






