import { useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import CallApi from "../../components/CallApi/CallApi";
import RenderDetalle from "../../components/RenderDetalle/RenderDetalle";

 function DetalleProducto (){

    const {productoNombre} = useParams();

    const [producto, setProducto]= useState('');

    async function tomadorProductos (){
        let productosLlegan = await CallApi();

        let productoRender = productosLlegan.find((producto)=> producto.nombre === productoNombre);

        setProducto(productoRender)
           }

    useEffect(()=>{
         tomadorProductos();
         

    },[])
        console.log(producto)

    return(
        <div>
             {
                producto?  
                <RenderDetalle producto={producto}></RenderDetalle>  
                :
                <div>No existe este producto.</div> 
            } 

        </div>
    )
}

export default DetalleProducto