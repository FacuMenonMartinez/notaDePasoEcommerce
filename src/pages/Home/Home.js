import { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ElementoBanner from "../../components/ElementoBannerHome/HomeBanner";
import ProductsList from "../../components/CallApi/CallApi";
import RenderProductos from "../../components/RenderProductos/RenderProductos"
import "./Home.css"

 function Home(){

    const [productos, setProductos] = useState([])

    async function tomadorProductos (){
        let productosLlegan = await ProductsList();
         setProductos(productosLlegan);
        
    }
   
    useEffect(()=>{
        tomadorProductos();
    },[])


 
 const [filtrados, setFiltrados] = useState([]);

 useEffect(()=>{
    let listaFiltro =  RenderProductos(productos, "Instrumento")
    setFiltrados(listaFiltro)
 },[])

 console.log(productos)

 console.log(filtrados)

    // ------------------------------------------------------
    // RenderProductos(productos, "Instrumento");


    // let nuevoProducto = <RenderProductos array={productos} categoria="Instrumento"/>
    // console.log(<RenderProductos array={productos} categoria="Instrumento"/>)
    
    return(
        <div>
            <ItemListContainer greetin='Bienvenidos a mi tienda online'/>
            <div className="contenedorBanner">
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerInstrumentos" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/instrumentos" nombreElemento='Instrumentos'/>
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerPartituras" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/partituras" nombreElemento='Partituras'/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home