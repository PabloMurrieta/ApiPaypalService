import mongoose from "mongoose";

const conectarDB = async () =>{

    try {

     await mongoose.connect(process.env.MONGODB_CNN || '')
     console.log('Conectado con la Base de datos en Mongoo');
        
    } catch (error) {
        console.log(error);
        throw new Error ('hubo un error en la conexion con la base de datos')
    }
}

export default conectarDB