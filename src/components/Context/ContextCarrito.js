import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [carritoArray, setCarritoArray] = useState([]);


    // const data ={
    //     AgregarAlCarrito
    // }

    const AgregarAlCarrito = (producto, cantidad) => {

        const productoAgregado = {
            producto: producto,
            cantidad: cantidad,
            totalItem: producto.precio * cantidad
        }

        console.log("Producto:", productoAgregado.producto.nombre,
            "Cantidad:", cantidad, "Total:", productoAgregado.totalItem);

        setCarritoArray([...carritoArray, productoAgregado]);


    }
    console.log(carritoArray);

    const value = {
        carritoArray,
        AgregarAlCarrito
    }


    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider