import { useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import RenderDetalle from "../../components/RenderDetalleProducto/RenderDetalle";
import Loading from "../../components/Loading/Loading";

 function DetalleProducto (){

    const {productoNombre} = useParams();

    const [producto, setProducto]= useState('');

    const fbCollection = collection(db, "productos");

    
    const tomarProductos = async () => {
        const productos = await getDocs(fbCollection);
        const filtradoProductos = productos.docs.map((item) => ({ ...item.data(), id: item.id }));

        let productoRender = filtradoProductos.find((producto)=> producto.nombre === productoNombre);

        setProducto(productoRender);
        
    }

    useEffect(() => {
        tomarProductos()
    }, []);

    return(
        <div className="contenedorGeneral">
             {
                producto?  
                <RenderDetalle producto={producto}></RenderDetalle>  
                :
                <div><Loading/></div> 
            } 

        </div>
    )
}

export default DetalleProducto