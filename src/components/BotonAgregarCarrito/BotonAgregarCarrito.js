import { useState, useContext } from "react" ;
import { CarritoContext } from "../Context/ContextCarrito";

function BotonAgregarCarrito ({stock, datosProducto}){

    // CONTADOR
const [cantidad, setCantidad] = useState(1)

    const AumentarCantidad = ()=>{

        if(cantidad < stock ){
            setCantidad(cantidad + 1);
        }
    }

    const DisminuirCantidad = ()=> {
        if(cantidad > 1){
            setCantidad(cantidad - 1);
        }
    }


    //AGREGAR AL CARRITO
    const {AgregarAlCarrito} = useContext(CarritoContext); 

    function handleCarrito (){
        AgregarAlCarrito(datosProducto, cantidad);
    }


    return (
        <div className="is-flex is-flex-direction-column ml-2">
            <div className="is-flex">
            <button className="button has-background-dark has-text-light p-3" onClick={DisminuirCantidad}> - </button>
            <h5 className="box has-background-grey-lighter has-text-bold mx-3 mb-1 p-2 px-2">{cantidad}</h5>
            <button className="button has-background-dark has-text-light p-3" onClick={AumentarCantidad}>+</button>
            </div>
            <div>
            <button className="button has-text-weight-medium is-dark is-small is-responsive" onClick={handleCarrito} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default BotonAgregarCarrito