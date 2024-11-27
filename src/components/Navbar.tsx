import React, { useContext } from "react";
import { useState } from "react";
import './Navbar.css'
import logincart from './images/logincart.jpeg';
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

const Navbar = () => {

    const [menu, setMenu]= useState("home");
    const {getTotalCartItems} = useContext(ShopContext);


    return(
        <div className="navbar">
            <div className='navLogo'>
                <img src="" alt=""/>
                <p>E-Shopping Mart</p>
            </div>
            <ul className="navMenu">
                <li onClick={() => {setMenu("home")}}><Link to='/'className="navLink">Home</Link>{menu==="home"&& <hr/>}</li>
                <li onClick={() => {setMenu("women")}}><Link to='/women' className="navLink">Women</Link>{menu==="women"&& <hr/>}</li>
                <li onClick={() => {setMenu("men")}}><Link to='/men' className="navLink">Men</Link>{menu==="men"&& <hr/>}</li>
                <li onClick={() => {setMenu("kids")}}><Link to='/kids' className="navLink">Kids</Link>{menu==="kids"&& <hr/>}</li>
            </ul>
            <div className="loginCart">
                <Link to='/signup'><button>Login</button></Link>
                <Link to='/cart'><img src={logincart} alt="logincart icon" height={40} width={40} /></Link>
                <div className="navCartCount">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;