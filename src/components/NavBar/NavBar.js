import CartWidget from "../CartWidget/CartWidget";
import icono from "../../assets/icono.png";

function NavBar (){
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={icono} alt="Logo del sitio"></img>
            </div>
            <div>
                <button>Instrumentos</button>
                <button>Partituras</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>

    )
};

export default (NavBar);