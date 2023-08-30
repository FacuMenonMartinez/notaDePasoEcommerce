
import { useState, useContext, useEffect } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { CarritoContext } from "../../components/Context/ContextCarrito";
import FormularioCheckout from "../../components/FormularioCheckout/FormularioCheckout";
function CheckoutPrueba() {
    // Estado de lo que se va a enviar como pedido
    const [ordenGenerada, setOrdenGenerada] = useState({});
    const [orderId, setOrderId] = useState(null)
    const [mensaje, setMensaje] = useState("")
    const [habilitarOrden, setHabilitarOrden] = useState(false);

    // Traigo la coleccion de firebase
    const fbCheckout = collection(db, "ordenesDeCompra");
    const { carritoArray } = useContext(CarritoContext);

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
        console.log(dataOrden)
        setOrdenGenerada(dataOrden);
        console.log(ordenGenerada)
    }

    // Funcion que va a cargar la orden en firebase
    const enviarOrden = async () => {
          try {
            // declaro la constante docRef, para poder acceder al id
            const docRef = await addDoc(fbCheckout, ordenGenerada);
            // guardo el id de la orden
            setOrderId(docRef.id)
            setMensaje("Orden enviada con éxito");
            console.log("Orden enviada");
            // Limpia el carrito o realiza otras acciones necesarias
          } catch (error) {
            setMensaje("Error al enviar la orden");
            console.error("Error al enviar la orden:", error);
          }
      };
    return (
        <div>
            <h1>Finaliza tu compra</h1>
            {mensaje && <p>{mensaje}</p>}
            {orderId && <p>order id: {orderId}</p>}
            <FormularioCheckout generarOrden={GenerarOrden} />
            <button onClick={enviarOrden}>Confirmar pedido</button>
        </div>
    )
}
export default CheckoutPrueba

