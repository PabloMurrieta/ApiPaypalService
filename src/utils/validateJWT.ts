// import { Request, Response, NextFunction} from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../models/user';

// const validarJWT = async (req : Request, res : Response, next: NextFunction) =>{

//     const token = req.header('token');

//     if(!token){
//         return res.status(401).json({
//             msg:'No hay token en la aplicacion'
//         })
//     }

//     try {
       
//         //VERIFICACION DE TOKEN
//         // la funcion verify(token-llavePrivada(.env)) verifica el token enviado
//         const {uid}  =  jwt.verify(token, process.env.SECRET_JWT_KEY || '');
//         //ver si el usuario corresponde al id
//         req.USER = await User.findById(uid);
//         // Verificar si el usuario no ha sido borrado


      
//         req.usuario;
//         next();


//      } catch (error) {
//         console.log(error);
//         res.status(401).json({
//             msg:'Token no valido'
//         })
//      }


//  }

//  export default validarJWT