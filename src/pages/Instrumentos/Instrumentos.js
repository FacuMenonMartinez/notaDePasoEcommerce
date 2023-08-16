import { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ContenedorProductos from "../../components/RenderContenedorProductos/ContenedorProductos";
import CallApi from "../../components/CallApi/CallApi";


function Instrumentos (){
    const [ instrumentos, setInstrumentos]= useState([]);

   async function tomadorProductos (){
            const productos = await CallApi();
            const productosAMostrar = productos.filter(item=> item.categoria === "Instrumento");
            setInstrumentos(productosAMostrar);
    }
    
    useEffect(()=>{
        tomadorProductos();
    }, [])

    return(
        <div>
            <ItemListContainer greetin='Instrumentos'/>
            <ContenedorProductos arrayProductos={instrumentos}/>
        </div>
    )
}

export default Instrumentos