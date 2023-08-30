import { Link } from "react-router-dom"
import BotonAgregarCarrito from "../BotonAgregarCarrito/BotonAgregarCarrito"

function Producto ({imagen, nombre, precio, stock, id}){


    const datosProducto={
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        id: id
    }



    return (
        <div className="box columns is-flex-shrink-1 is-flex is-flex-direction-column is-align-items-center is-3 m-3 column">
            <img className="column  image is-128x128" src={imagen} alt={nombre}>
            </img>
            <h3 className="column is-full has-text-black has-text-weight-bold is-size-5">
                {nombre}
            </h3>
            <div className="is-flex is-justify-content-space-between is-align-items-center	 ">
                <div className="has-text-black has-text-weight-medium">
                    <p>Precio ${precio}</p>
                    <Link to={`/producto/${nombre}`} className="button is-dark is-small is-responsive">
                        Ver Mas
                    </Link>
                </div>
                <div>
                <BotonAgregarCarrito stock={stock} datosProducto={datosProducto}/>
                </div>
            </div>
        </div>)
}

export default Producto