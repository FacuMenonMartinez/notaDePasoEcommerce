import { createContext, useState } from "react";
import { toast } from 'react-toastify';
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {

    
// Carrito y todo lo relacionado a su funcionamiento
    const [carritoArray, setCarritoArray] = useState([]);

    const AgregarAlCarrito = (producto, cantidad) => {

        const productoAgregado = {
            producto: producto,
            cantidad: cantidad,
            imagen: producto.img,
            totalItem: producto.precio * cantidad
        }

        console.log("Producto:", productoAgregado.producto.nombre,
            "Cantidad:", cantidad, "Total:", productoAgregado.totalItem);

        setCarritoArray([...carritoArray, productoAgregado]);

        toast('Producto agreado al carrito', {
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

    const EliminarItem=(id)=>{
        const item = carritoArray.filter(producto=> producto.producto.id !== id);
        setCarritoArray(item);

        toast('Producto eliminado del carrito', {
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

    const EliminarCarrito=()=>{
        setCarritoArray([]);

        toast('Carrito eliminado', {
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


    // Modificar la clase para que se muestre y se oculte

    const [mostrarCarrito, setMostrarCarrito]=useState("carritoContenedor");

    function MostrarOcultarCarrito (){
        if(mostrarCarrito.includes("carritoContenedorMostrar")){
            setMostrarCarrito("carritoContenedor");
        }else{
            setMostrarCarrito("carritoContenedor carritoContenedorMostrar");
        }
    }


    const value = {
        setCarritoArray,
        carritoArray,
        AgregarAlCarrito,
        EliminarItem,
        EliminarCarrito,
        mostrarCarrito,
        MostrarOcultarCarrito
    }
    


    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider