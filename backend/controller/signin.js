import Register from '../model/register'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

require('dotenv').config()


export const login = async (req, res) => {
    //Check if email is registered

    const confirmedUser = await Register.findOne({
        email:req.body.email
    });
    // if email is not in our register
    if (!confirmedUser) return res.status(400).send('Email is wrong/not register');


    
    //check if password is wrong
    try {
        const confirmedPassword = await bcrypt.compare(req.body.password, confirmedUser.password);
        if(!confirmedPassword) return res.status(400).send('wrong password');
        console.log(confirmedPassword);
    } catch (e){
        console.log(e);
        next(e)
    }
   

    //create and assign a token 
    const token = jwt.sign({_id: confirmedUser._id}, process.env.TOKEN_SECRET, {
        expiresIn:"7d",
    })
    console.log(token);

    return res.json({ token: token});
}
