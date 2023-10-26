import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ContenedorProductos from "../../components/ContenedorProductos/ContenedorProductos";
import Loading from "../../components/Loading/Loading";

function Partituras (){
    const [partituras, setPartituras] = useState([]);

    const fbCollection = collection(db, "productos");


    const tomarProductos = async () => {
        const productos = await getDocs(fbCollection);
        const filtradoProductos = productos.docs.map((item) => ({ ...item.data(), id: item.id }));
        setPartituras(filtradoProductos);
    }

    useEffect(() => {
        tomarProductos()
        }, []);

    return(
        <div className="contenedorGeneral">
            <ItemListContainer greetin='Partituras'/>
            {partituras.length>0?
                <ContenedorProductos arrayProductos={partituras} filtro={"Partitura"}/>
                :<div>
                    <Loading/>
                </div>
            }
        </div>
    )
}

export default Partituras

