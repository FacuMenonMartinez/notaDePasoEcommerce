import { useState, useContext, useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { CarritoContext } from "../../components/Context/ContextCarrito";
import FormularioCheckout from "../../components/FormularioCheckout/FormularioCheckout";
import ResumenPedido from "../../components/ResumenPedido/ResumenPedido";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

function Checkout() {
    // Estado de lo que se va a enviar como pedido
    const [ordenGenerada, setOrdenGenerada] = useState({});

    const [orderId, setOrderId] = useState(null)

    // Traigo la coleccion de firebase
    const fbCheckout = collection(db, "ordenesDeCompra");

    const { carritoArray,setCarritoArray } = useContext(CarritoContext);

    // Mapeo el carrito para tomar solo lo que necesito en la orden y armo un objeto
    const carritoOrden = carritoArray.map(item => {
        const producto = {
            id: item.producto.id,
            nombre: item.producto.nombre,
            cantidad: item.cantidad,
            precio: item.totalItem

        }
        return producto
    })

    // Suma total del pedido
    const precioTotalOrden = carritoArray.reduce((acc, valor) => acc + valor.totalItem, 0);



    // Funcion que voy a enviar al componente hijo para que me brinde los datos del formulario y 
    // lo setee en el estado
    const GenerarOrden = (nombreCliente, emailCliente, direccionCliente, telefonoCliente) => {

        const dataOrden = {
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
    const enviarOrden = async () => {
       const docRef = await addDoc(fbCheckout, ordenGenerada);
        setOrdenGenerada({});
        console.log("Orden enviada");
        setOrderId(docRef.id);
        setCarritoArray([]);
    }

    if (Object.keys(ordenGenerada).length > 0) {
        enviarOrden();

    }

    return (
        <div className="contenedorGeneral">
            {!orderId
                ?<div>
                    <ItemListContainer greetin='Finaliza tu compra'/>
                    <FormularioCheckout generarOrden={GenerarOrden} />
                    </div>
                :(<div>
                    <ItemListContainer greetin='¡Gracias por tu compra!'/>
                    <ResumenPedido docId={orderId}/>
                </div>

                )
            }
        </div>
    )
}

export default Checkout