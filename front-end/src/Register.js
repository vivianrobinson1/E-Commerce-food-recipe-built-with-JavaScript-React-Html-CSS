import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const initialState = Object.freeze({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        password:""

    })
    const [formData, setFormData] = useState(initialState)
    console.log(formData);
    // let navigate = useNavigate()

    const HandleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        try{
            axios.post('http://127.0.0.1:8000/api/register/',formData).then(res => {
            
                    console.log(res.data);
                    
                

            })
            window.location.href = '/register'
        } catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <Navbar/>
    <div className="wrapper">
        <div className="form-wrapper">
            <h1>create account</h1>

            <form onSubmit={HandleSubmit}>
            <div className="firstname">
                    <label htmlFor="firstname">First Name</label>
                    <input  className='#' type="text" placeholder='First Name' name='firstname' value={formData.firstnameme} noValidate onChange={HandleChange} />

                </div>
                <div className="lastname">
                    <label htmlFor="lastname">Last Name</label>
                    <input  className='#' type="text" placeholder='Last Name' name='lastname' value={formData.lastnameme} noValidate onChange={HandleChange} />

                </div>
                <div className="phonenumber">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input  className='#' type="number" placeholder='Phone Number ' name='phonenumber' value={formData.phonenumber} noValidate onChange={HandleChange} />

                </div>

        
                <div className="email">
                    <label htmlFor="Email">Email</label>
                    <input  className='#' type="email" placeholder='Email' name='email' value={formData.email} noValidate onChange={HandleChange} />

                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='#' placeholder='password' name='password' value={formData.password} noValidate onChange={HandleChange} />


                </div>

                <div className="createaccount">
                    <button type='submit'> create Account</button>
                    <a href="/login">Already have an account, signin</a>
                </div>
                </form>
        </div>



    </div>
    </>


  )
}

export default Register;