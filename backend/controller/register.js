import Register from '../model/register';
import bcrypt from 'bcrypt';


export const register = async (req, res) => {

    try{
        
        const {firstName, lastName, email, password, phonenumber} = req.body;
        console.log(req.body);

        //check if email exist
        let userExist = await Register.findOne({ email:req.body.email }).exec();
        console.log('$ {userExist} Email is taken');

        if (userExist) return res.status(400).send("Email is taken");

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashpassword);
        
        // register
        const user = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phonenumber: req.body.phonenumber,
            password: hashpassword,
            email: req.body.email
        });
        console.log(user);
        await user.save();
        console.log("USER CREATED", user);
        return res.json({ ok: true });
    } 
    catch (err) {
        console.log("CREATE USER FAILED", err);
        return res.status(400).send("Error. Try again.");
    }
};
