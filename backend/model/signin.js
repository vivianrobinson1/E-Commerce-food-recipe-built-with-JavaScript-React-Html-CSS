const mongoose = require ('mongoose');
const signinSchema = new mongoose.Schema({
    password: {
        type: String,
        trim:true, 
        required:'password is required',
    },
    email:{
        type: String, 
        trim:true,
        unique: true, 
        required: 'Email is required'
    }
})


export default mongoose.model("Signin", signinSchema)