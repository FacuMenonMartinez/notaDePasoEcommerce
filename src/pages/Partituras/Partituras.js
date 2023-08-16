import { useState, useEffect } from "react"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import CallApi from "../../components/CallApi/CallApi";
import ContenedorProductos from "../../components/RenderContenedorProductos/ContenedorProductos";

function Partituras (){
    const [partituras, setPartituras] = useState([]);

    async function tomadorProductos(){
        const productos = await CallApi();
        const productosAMostrar = productos.filter(item=> item.categoria === "Partitura");
        setPartituras(productosAMostrar)
    }

    useEffect(()=>{
        tomadorProductos();
    },[]);



    return(
        <div>
            <ItemListContainer greetin='Partituras'/>
            <ContenedorProductos arrayProductos={partituras}/>

        </div>
    )
}

export default Partituras

