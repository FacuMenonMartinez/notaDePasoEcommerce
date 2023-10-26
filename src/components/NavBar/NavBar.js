import { useState, useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import icono from "../../assets/icono.png";
import { Link } from "react-router-dom";
import { CarritoContext } from "../Context/ContextCarrito";
import "./navbar.css";

function NavBar (){
    const[isActive, setIsActive]=useState(false);

    const toggleMenu =()=>{
        setIsActive(!isActive);
    }

    const {carritoArray}= useContext(CarritoContext);


    return (

        <nav className="navbar navBar">
            <div className="navbar-brand">
                <div>
                    <Link className="px-2 py-3 image is-96x96" to="/"><img src={icono} alt="Logo del sitio"></img></Link>
                </div>
                  <p className="contenedorContadorResponsive mt-3 is-size-6 has-text-centered has-text-white has-text-weight-semibold">{carritoArray.length}</p>

                <div className={`navbar-burger ml-0 burger ${isActive ? 'is-active' : ''}`} onClick={toggleMenu}>
                    <span className="has-text-white has-text-weight-semibold"></span>
                    <span className="has-text-white has-text-weight-semibold"></span>
                    <span className="has-text-white has-text-weight-semibold"></span>
                </div>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <Link to="/instrumentos" className="hoverMenu has-text-white navbar-item">Instrumentos</Link>
                <Link to="/partituras" className="hoverMenu has-text-white navbar-item">Partituras</Link>
                <CartWidget/>

            </div>

               


        </nav>

    )
};

export default (NavBar);