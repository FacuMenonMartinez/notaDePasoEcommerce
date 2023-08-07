import "./renderDetalle.css";
import BotonCantidad from "../BotonCantidad/BotonCantidad";

function RenderDetalle ({producto}){
    const {nombre, descripcion, precio, img, id, stock } = producto

   const agregarCarrito=(cantidad)=>{
    console.log('Cantidad agregada',cantidad,'El precio es', precio*cantidad)
   }

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
                <BotonCantidad stock={stock} clickAgregar={agregarCarrito}/>
            </div>
            </div>
        </div>
    )
}

export default RenderDetalle