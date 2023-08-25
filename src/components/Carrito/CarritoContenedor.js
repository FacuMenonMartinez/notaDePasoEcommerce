import { useContext } from "react"
import { CarritoContext } from "../Context/ContextCarrito"
import { IoCloseCircleSharp } from "react-icons/io5";

import "./carritoContenedor.css"

function CarritoContenedor (){
    const {carritoArray}= useContext(CarritoContext);
    const sumaTotal = carritoArray.reduce((acc, valor)=> acc + valor.totalItem, 0 );
    console.log( "La suma total es:",sumaTotal);

    return(
        <aside className="carritoContenedor">
            {/* <h3>Carrito Contenedor</h3> */}

            {/* <p>Extension del carrito: {carritoArray.length}</p> */}
            {carritoArray.length>0
                ?carritoArray.map(item=>{
                    return <div className="carritoItem" key={item.producto.id}>
                        <img className="imagenCarrito" src={item.producto.imagen}></img>
                        <div>
                            <h2>Nombre: {item.producto.nombre}</h2>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.totalItem}</p>
                        </div>
                        <IoCloseCircleSharp className="iconoBorrar"/>
                    </div>
                })
                :<h3>No hay productos en tu carrito.</h3>}
            <span>Total: ${sumaTotal}</span>    
        </aside>
    )
}

export default CarritoContenedor
