import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Loading from "react-loading";

function ResumenPedido({docId}){

    const [resumenCompra, setResumenCompra]=useState({});

    const [carritoComprado, setCarritoComprado] =useState([]);

    const docReferencia = doc(db, "ordenesDeCompra", docId);

   async function ordenDeCompraFB(){
        const doc = await getDoc(docReferencia);
        setResumenCompra(doc.data());
        setCarritoComprado(doc.data().carrito);
    }

    useEffect(()=>{
        ordenDeCompraFB();
    },[])

    const renderCarritoComprado = carritoComprado.map((item)=>{
        return <div>
            <h4>{item.nombre}</h4>
            <h4>{item.precio}</h4>
            <h4>{item.cantidad}</h4>
            <hr/>
        </div>
    })

    


    return(
        <div>
            <h2>Resumen de compra</h2>
            {Object.keys(resumenCompra).length>0
            ?(<section>
                <h3>Nombre: {resumenCompra.nombre}</h3>
                <h3>Direccion:{resumenCompra.direccion} </h3>
                <h3>Pedido ID: {docId}</h3>
                <div>{renderCarritoComprado}</div>
            </section>)
            :<Loading/>
            }

    
        </div>
    )
}

export default ResumenPedido