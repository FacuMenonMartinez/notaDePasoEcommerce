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
            <h3 className="has-text-light is-size-4 has-text-centered">Carrito de compras</h3>
            {carritoArray.length>0
                ?carritoArray.map(item=>{
                    return <div className="is-flex is-justify-content-space-between	 pb-4 mt-3 mx-auto box has-background-black carritoItem " key={item.producto.id}>
                        <img className=" image is-64x64 imagenCarrito" src={item.producto.imagen}></img>
                        <div className="has-text-light pl-2">
                            <h4 className=" is-size-7-mobile">{item.producto.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>${item.totalItem}</p>
                        </div>
                        <div onClick={()=>{EliminarItem(item.producto.id)}}>
                            <IoCloseCircleSharp  className="iconoBorrar"/>
                        </div>
                    </div>
                })
                :<h4 className="has-text-light pl-2" >No hay productos en tu carrito.</h4>}
                <div className="columns is-multiline p-2 pr-5">
                    <span className="has-text-light column is-full">Total: ${sumaTotal}</span>
                    <Link className="column is-narrow is-two-quarters-mobile" to="/checkout"><button className="button is-black is-responsive">Terminar Compra</button></Link>
                    <div className="column">
                        <button className="button is-black  is-responsive" onClick={EliminarCarrito}>Eliminar Carrito</button>
                    </div>
                </div>
        </aside>
    )
}

export default CarritoContenedor
