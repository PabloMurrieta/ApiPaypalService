import jwt from 'jsonwebtoken';

export const generarJWT = (uid = '') =>{

    return new Promise ((resolve, reject) =>{

        const payload = {uid};

        //Tomamos el Privatekey de las variablesde entorno
        jwt.sign(payload,process.env.SECRET_JWT_KEY || '',{
            expiresIn:'4h'           
        },(err, token) =>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')

            }else{
                resolve(token);
            }
        })
    })
}