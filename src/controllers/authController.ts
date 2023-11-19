import { Request, Response } from "express";
import User from "../models/user";
import { generarJWT } from "../utils/tokenAuth";


export const register = async (req: Request, res: Response) => {

    const { username, password, email } = req.body;
    try {

        const user = new User({ username, password, email });
        await user.save();
        res.status(200).json({ msg: 'User registrado exitosamente', user });

    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msg: 'no existe'
            });
        }

        const token = generarJWT(user.id)

        res.json(token)
    } catch (error) {
        res.status(500).json({ msg: error })

    }

};




