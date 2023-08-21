import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ContenedorProductos from "../../components/RenderContenedorProductos/ContenedorProductos";
import Loading from "../../components/Loading/Loading";


function Instrumentos (){
    const [ instrumentos, setInstrumentos]= useState([]);

    const fbCollection = collection(db, "productos");

    const tomarProductos = async () => {
        const productos = await getDocs(fbCollection);
        const filtradoProductos = productos.docs.map((item) => ({ ...item.data(), id: item.id }));
        setInstrumentos(filtradoProductos);
        console.log(instrumentos);
    }

    useEffect(() => {
        tomarProductos()
    }, []);


    return(
        <div>
            <ItemListContainer greetin='Instrumentos'/>
            {instrumentos.length>0?
                <ContenedorProductos arrayProductos={instrumentos} filtro={"Instrumento"}/>
                :<div>
                    <Loading/>
                </div>
            }
        </div>
    )
}

export default Instrumentos