import { Link } from "react-router-dom"

function Producto ({imagen, nombre, precio}){


    return (
        <div className="box is-flex is-flex-direction-column is-align-items-center column is-3 m-3">
            <img className="image is-128x128" src={imagen} alt={nombre}>
            </img>
            <h3 className="has-text-black has-text-weight-bold is-size-5">
                {nombre}
            </h3>
            <div className="is-flex is-justify-content-space-between is-align-items-center	 ">
                <div className="has-text-black has-text-weight-medium">
                    <p>Precio ${precio}</p>
                    <Link to={`/${nombre}`} className="button is-dark is-small is-responsive">
                        Ver Mas
                    </Link>
                </div>
                <button className="button has-text-weight-medium ml-2  is-dark is-small is-responsive">
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>)
}

export default Producto