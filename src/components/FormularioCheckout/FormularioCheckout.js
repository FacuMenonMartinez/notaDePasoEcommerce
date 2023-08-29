import {useState} from "react";
function FormularioCheckout({generarOrden, enviarOrden}){

    const [dataUsuario, setDataUsuario] = useState({email: '', nombre:'',telefono:'',direccion:'' });


    function ClickFinalizarCompra(e){
        e.preventDefault();

        
        generarOrden(dataUsuario.nombre, dataUsuario.email, dataUsuario.direccion, dataUsuario.telefono);
        enviarOrden();

    }



    return(
            <form>
                <input onBlur={(e)=>{setDataUsuario({...dataUsuario, email:e.target.value})}} type="email" placeholder="Email"></input>
                <input onBlur={(e)=>{setDataUsuario({...dataUsuario, nombre:e.target.value})}} type="text" placeholder="Nombre"></input>
                <input onBlur={(e)=>{setDataUsuario({...dataUsuario, direccion:e.target.value})}} type="text" placeholder="Direccion"></input>
                <input onBlur={(e)=>{setDataUsuario({...dataUsuario, telefono:e.target.value})}} type="number" placeholder="Telefono"></input>
                <button onClick={ClickFinalizarCompra}>Finalizar Compra</button>
            </form>
    )
}

export default FormularioCheckout