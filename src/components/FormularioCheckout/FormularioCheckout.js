import {useState} from "react";
import "./formularioCheckout.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FormularioCheckout({generarOrden}){

    const [dataUsuario, setDataUsuario] = useState({email: '', nombre:'',telefono:'',direccion:'' });


    function ClickFinalizarCompra(e){
        e.preventDefault();
        generarOrden(dataUsuario.nombre, dataUsuario.email, dataUsuario.direccion, dataUsuario.telefono);
        
        toast('Finalizando compra', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }



    return(
            <form className="field mx-auto">
                <input className="input is-black  my-3" onChange={(e)=>{setDataUsuario({...dataUsuario, email:e.target.value})}} type="email" placeholder="Email"></input>
                <input className="input is-black my-3" onChange={(e)=>{setDataUsuario({...dataUsuario, nombre:e.target.value})}} type="text" placeholder="Nombre"></input>
                <input className="input is-black my-3" onChange={(e)=>{setDataUsuario({...dataUsuario, direccion:e.target.value})}} type="text" placeholder="Direccion"></input>
                <input className="input is-black my-3" onChange={(e)=>{setDataUsuario({...dataUsuario, telefono:e.target.value})}} type="number" placeholder="Telefono"></input>
                <div className="buttons is-centered mt-3 mb-6">
                    <button className="button  is-black is-large" onClick={ClickFinalizarCompra}>Finalizar Compra</button>
                    <ToastContainer />
                </div>
            </form>
    )
}

export default FormularioCheckout