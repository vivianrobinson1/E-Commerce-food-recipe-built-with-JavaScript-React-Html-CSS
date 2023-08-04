import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Recipe from './Recipe'
import Cart from './Cart'
import Navbar2 from './components/Navbar2'
import { useCart } from "react-use-cart"



function home() {
    const token = sessionStorage.getItem("token")
    console.log(token);
  return (
    <div>
        {
            token ? <Navbar2/> :<Navbar/>
        }
        <Recipe/>
        <Footer/>
    </div>
  )
}

export default home;