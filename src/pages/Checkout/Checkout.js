import {useState, useContext, useEffect} from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { CarritoContext } from "../../components/Context/ContextCarrito";
import FormularioCheckout from "../../components/FormularioCheckout/FormularioCheckout";

function Checkout(){
// Estado de lo que se va a enviar como pedido
    const[ordenGenerada, setOrdenGenerada]= useState({});

    // Traigo la coleccion de firebase
    const fbCheckout = collection(db, "ordenesDeCompra");
    
    const {carritoArray}= useContext(CarritoContext);

    // Mapeo el carrito para tomar solo lo que necesito en la orden y armo un objeto
    const carritoOrden= carritoArray.map(item=>{
        const producto={
            id: item.producto.id,
            nombre: item.producto.nombre,
            cantidad: item.cantidad,
            precio: item.totalItem

        }
        return producto
    })

    // Suma total del pedido
    const precioTotalOrden = carritoArray.reduce((acc, valor)=> acc + valor.totalItem, 0 );



    // Funcion que voy a enviar al componente hijo para que me brinde los datos del formulario y 
    // lo setee en el estado
    const generarOrden =(nombreCliente, emailCliente, direccionCliente, telefonoCliente)=>{

        const dataOrden={
            nombre: nombreCliente,
            email: emailCliente,
            direccion: direccionCliente,
            telefono: telefonoCliente,
            carrito: carritoOrden,
            totalCompra: precioTotalOrden
        }
            setOrdenGenerada(dataOrden);
        }

        // Funcion que se fija que la orden no este vacia y la carga en firebase
        const enviarOrden = async()=>{
          
            if(Object.values(ordenGenerada).length>0){
                await addDoc(fbCheckout,(ordenGenerada));
                console.log("Orden enviada");
            }

        }


    return(
        <div>
            <h1>Finaliza tu compra</h1>
            <FormularioCheckout generarOrden={generarOrden} enviarOrden={enviarOrden}/>
            {/* <button onClick={enviarOrden}>Confirmar pedido</button> */}
        </div>
    )
}

export default Checkout