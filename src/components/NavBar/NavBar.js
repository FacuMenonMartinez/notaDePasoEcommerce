import CartWidget from "../CartWidget/CartWidget";
import icono from "../../assets/icono.png";

function NavBar (){
    return (

        
        
        <nav className="navbar navBar is-black columns">
            <div className="column is-one-quarter">
                <img className="logo" src={icono} alt="Logo del sitio"></img>
            </div>
            <div className="column is-half is-flex is-justify-content-space-between">
            <a className="has-text-white">Instrumentos</a>
            <a className="has-text-white">Partituras</a>
            <a className="has-text-white">Contactos</a>
            {/* <div className="column has-background-danger navbar-item"></div>
            <div className="column has-background-link navbar-item"></div>
            <div className="column has-background-primary navbar-item"></div> */}
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