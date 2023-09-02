import { useState, useContext } from "react" ;
import { CarritoContext } from "../Context/ContextCarrito";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className="columns is-multiline ml-2 is-centered ">

            <div className="is-flex is-justify-content-center column py-4">
                <button className="button is-responsive is-small has-background-dark has-text-white " onClick={DisminuirCantidad}> - </button>
                 <h5 className="has-background-grey-lighter has-text-bold mx-3 p-1 px-3">{cantidad}</h5>
                 <button className="button is-responsive is-small has-background-dark has-text-white " onClick={AumentarCantidad}>+</button>
            </div>
            <div className="column is-full is-flex is-justify-content-center py-3">
                <button className="button has-text-weight-medium is-small is-dark is-responsive" onClick={handleCarrito} >Agregar al carrito</button>
                <ToastContainer />

            </div>
        </div>
    )
}

export default BotonAgregarCarrito