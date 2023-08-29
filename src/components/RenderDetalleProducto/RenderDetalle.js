import "./renderDetalle.css";
import BotonAgregarCarrito from "../BotonAgregarCarrito/BotonAgregarCarrito";

function RenderDetalle ({producto}){
    const {nombre, descripcion, precio, img, id, stock } = producto


    return(
        <div>
            <h1>{nombre}</h1>
            <div className="is-flex is-align-items-center p-3 columns">
            <div className="is-flex is-flex-direction-column is-align-items-center column is-three-fifths">
                <img className="imagen" src={img}></img>
                <p className="descripcion">{descripcion}</p>
            </div>
            <div>
                <p className="precio">${precio}</p>
                <BotonAgregarCarrito stock={stock} datosProducto={{nombre, precio, img, id}}/>
            </div>
            </div>
        </div>
    )
}

export default RenderDetalle