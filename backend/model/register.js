const mongoose = require ('mongoose');


const registerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim:true, 
        required:'firstName is required'
    },
    lastname: {
        type: String,
        trim:true, 
        required:'lastName is required'
    },
    phonenumber: {
        type: Number,
        trim:true, 
        required:'phonenumber is required'
    },
    password: {  
        type: String,
        trim:true, 
        required:'password is required'
    },
    email:{
        type: String, 
        trim:true,
        unique: true, 
        required: 'Email is required'
    }
    
    
})


export default mongoose.model("Register", registerSchema)
