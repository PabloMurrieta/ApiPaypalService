import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({

    id:{
        type:String,
        // require:true,
        unique:true
    },
    email:{
        type:String,
        // require:true,
    },
    date:{
        type:Date,
        require:true,
        unique:true
    },
    status:{
        type:Boolean,
        undefined:null
    }

})

const Paymend = mongoose.model('Paymend',schema);

export default Paymend;