import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import icono from "../../assets/icono.png";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar (){
    const[isActive, setIsActive]=useState(false);

    const toggleMenu =()=>{
        setIsActive(!isActive);
    }


    return (

        <nav className="navbar navBar">
            <div className="navbar-brand">
                <div>
                    <Link className="" to="/"><img className="logo" src={icono} alt="Logo del sitio"></img></Link>
                </div>
                <div className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <Link to="/instrumentos" className="has-text-white navbar-item">Instrumentos</Link>
                <Link to="/partituras" className="has-text-white navbar-item">Partituras</Link>
                <Link to="/contacto" className="has-text-white navbar-item">Contacto</Link>
                <CartWidget/>
            </div>

               


        </nav>

    )
};

export default (NavBar);