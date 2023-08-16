import { useState } from "react" 

function BotonCantidad ({stock, clickAgregar}){

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

    // const AgregarAlCarrito = (cantidad)=>{

    //     onAdd(cantidad);
    // }

    function AgregarAlCarrito (){
        clickAgregar(cantidad)
    }


    return (
        <div className="is-flex is-flex-direction-column">
            <div className="is-flex">
            <button className="button has-background-dark has-text-light" onClick={DisminuirCantidad}> - </button>
            <h5 className="box has-background-grey-lighter has-text-bold mx-3 p-2 px-5">{cantidad}</h5>
            <button className="button has-background-dark has-text-light" onClick={AumentarCantidad}>+</button>
            </div>

            <div>
            <button className="button has-text-weight-medium is-dark is-large is-responsive" onClick={AgregarAlCarrito} >Agregar al carrito</button>

            </div>
        </div>
    )
}

export default BotonCantidad