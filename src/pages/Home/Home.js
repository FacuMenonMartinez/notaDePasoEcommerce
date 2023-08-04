import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ElementoBanner from "../../components/ElementoBannerHome/HomeBanner";
import "./Home.css"

function Home(){
    return(
        <div>
            <ItemListContainer greetin='Bienvenidos a mi tienda Online'/>
            <div className="contenedorBanner">
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerInstrumentos" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/instrumentos" nombreElemento='Instrumentos'/>
                <ElementoBanner claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerPartituras" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner" redireccion="/partituras" nombreElemento='Partituras'/>
            </div>
        </div>
    )
}

export default Home