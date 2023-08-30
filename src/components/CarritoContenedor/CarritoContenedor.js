import { useContext, useState } from "react";
import { CarritoContext } from "../Context/ContextCarrito";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./carritoContenedor.css"

function CarritoContenedor (){

    
    const {carritoArray, EliminarItem, EliminarCarrito, mostrarCarrito}= useContext(CarritoContext);

    const sumaTotal = carritoArray.reduce((acc, valor)=> acc + valor.totalItem, 0 );
    console.log( "La suma total es:",sumaTotal);
 

    return(
        <aside className={mostrarCarrito}>

            {carritoArray.length>0
                ?carritoArray.map(item=>{
                    return <div className="carritoItem" key={item.producto.id}>
                        <img className="imagenCarrito" src={item.producto.imagen}></img>
                        <div>
                            <h2>Nombre: {item.producto.nombre}</h2>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.totalItem}</p>
                        </div>
                        <div onClick={()=>{EliminarItem(item.producto.id)}}>
                            <IoCloseCircleSharp  className="iconoBorrar"/>
                        </div>
                    </div>
                })
                :<h3>No hay productos en tu carrito.</h3>}
                <span>Total: ${sumaTotal}</span>
                <Link to="/checkout"><button className="button is-black is-small ml-3">Terminar Compra</button></Link>
                <button className="button is-black is-small ml-3" onClick={EliminarCarrito}>Eliminar Carrito</button>
        </aside>
    )
}

export default CarritoContenedor
