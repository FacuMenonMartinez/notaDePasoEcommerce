import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ElementoBanner from "../../components/ElementoBannerHome/HomeBanner";
import ContenedorProductos from "../../components/ContenedorProductos/ContenedorProductos";
import Loading from "../../components/Loading/Loading";
import "./Home.css"

function Home() {

    const [prodContext, setProdContext] = useState([]);


    const fbCollection = collection(db, "productos");

    const tomarProductos = async () => {
        const productos = await getDocs(fbCollection);
        const filtradoProductos = productos.docs.map((item) => ({ ...item.data(), id: item.id }));
        setProdContext(filtradoProductos);
    }

    useEffect(() => {
        tomarProductos()
    }, []);


    return (
        <div>

            <ItemListContainer greetin='Bienvenidos a mi tienda online' />
            <div className="columns mx-auto mb-6 contenedorBanner">
                <ElementoBanner claseContenedor="elementoBannerInstrumentos" redireccion="/instrumentos" nombreElemento='Instrumentos' />
                <ElementoBanner claseContenedor="elementoBannerPartituras" redireccion="/partituras" nombreElemento='Partituras' />
            </div>
            <div>
                {prodContext.length>0?
                    <div>
                         <h2 className="pl-3 title is-2 has-text-black has-text-centered-mobile">Instrumentos</h2>
                         <ContenedorProductos arrayProductos={prodContext} filtro={"Instrumento"} />
                         <h2 className="pl-3 title is-2 has-text-black has-text-centered-mobile">Partituras</h2>
                         <ContenedorProductos arrayProductos={prodContext} filtro={"Partitura"} />
                    </div>
                    :<div>
                        <Loading/>
                    </div>
            }
            </div>
        </div>
    )
}

export default Home