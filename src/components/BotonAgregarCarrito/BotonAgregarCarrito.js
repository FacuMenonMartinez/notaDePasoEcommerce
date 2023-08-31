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
        <div className="columns is-multiline ml-2 is-centered">
            <div className="is-flex is-justify-content-center column ">
                <button className="button has-background-dark has-text-white p-3" onClick={DisminuirCantidad}> - </button>
                 <h5 className="has-background-grey-lighter has-text-bold mx-3 p-2 px-3">{cantidad}</h5>
                 <button className="button has-background-dark has-text-white p-3" onClick={AumentarCantidad}>+</button>
            </div>
            <div className="column is-full is-flex is-justify-content-center">
                <button className="button has-text-weight-medium is-dark is-responsive" onClick={handleCarrito} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default BotonAgregarCarrito