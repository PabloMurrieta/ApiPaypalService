import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({

    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    }

})

const User = mongoose.model('User',schema);

export default User;