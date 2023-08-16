import { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ElementoBanner from "../../components/ElementoBannerHome/HomeBanner";
import CallApi from "../../components/CallApi/CallApi";
import ContenedorProductos from "../../components/RenderContenedorProductos/ContenedorProductos";
import "./Home.css"

 function Home(){

    const [productos, setProductos] = useState([])

    async function tomadorProductos (){
        let productosLlegan = await CallApi();
         setProductos(productosLlegan);
        
    }
   
    useEffect(()=>{
        tomadorProductos();
    },[])

 console.log(productos)
    
    return(
        <div>
            <ItemListContainer greetin='Bienvenidos a mi tienda online'/>
            <div className="contenedorBanner">
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerInstrumentos" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/instrumentos" nombreElemento='Instrumentos'/>
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerPartituras" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/partituras" nombreElemento='Partituras'/>
            </div>
            <div>
            <ContenedorProductos arrayProductos={productos}/>
            </div>
        </div>
    )
}

export default Home