import CartWidget from "../CartWidget/CartWidget";
import icono from "../../assets/icono.png";
import { Link } from "react-router-dom";

function NavBar (){
    return (

        <nav className="navbar navBar is-black columns">
            <div className="column is-one-quarter">
            <Link to="/"><img className="logo" src={icono} alt="Logo del sitio"></img>
            </Link>
            </div>
            <div className="column is-half is-flex is-justify-content-space-between">
            <Link to="/instrumentos" className="has-text-white">Instrumentos</Link>
            <Link to="/partituras" className="has-text-white">Partituras</Link>
            <Link to="contacto" className="has-text-white">Contacto</Link>
            </div>
               
            <CartWidget/>

            <a className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </nav>

    )
};

export default (NavBar);