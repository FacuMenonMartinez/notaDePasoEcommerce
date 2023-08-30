// import{ useState} from "react";
import carrito from "../../assets/carrito.png";
import {  useContext } from "react";
import { CarritoContext } from "../Context/ContextCarrito";

function CartWidget (){

    const {carritoArray, MostrarOcultarCarrito}= useContext(CarritoContext);


    return (
        <div onClick={MostrarOcultarCarrito} className="div-carrito column navbar-item is-one-quarter is-clickable">
            <img className="carrito-logo"  src={carrito} alt="Carrito de Compras" />
            <div className="contador-carrito">{carritoArray.length}</div>
        </div>
    )
};

export default CartWidget;