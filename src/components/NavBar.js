import CartWidget from "./CartWidget"

function NavBar (){
    return (
        <nav>
            <div>
                <h2>Síncopa</h2>
                <h3>Instrumentos musicales</h3>
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