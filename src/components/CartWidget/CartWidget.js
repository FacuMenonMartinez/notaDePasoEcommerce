// import{ useState} from "react";
import carrito from "../../assets/carrito.png";
import {  useContext } from "react";
import { CarritoContext } from "../Context/ContextCarrito";

function CartWidget (){

    const {carritoArray, MostrarOcultarCarrito}= useContext(CarritoContext);


    return (
        <div className="is-flex navbar-item is-justify-content-center">
            <img  className="is-clickable"  src={carrito} alt="Carrito de Compras" onClick={MostrarOcultarCarrito} />
            <div className="mt-4 is-size-6 has-text-white has-text-weight-semibold">{carritoArray.length}</div>
        </div>
    )
};

export default CartWidget;