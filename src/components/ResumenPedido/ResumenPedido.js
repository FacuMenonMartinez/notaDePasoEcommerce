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
        return <div key={item.id} className="mx-3 my-4 box">
            <h4 className="is-size-4 has-text-weight-bold has-text-centered-touch is-size-6-touch">{item.nombre}</h4>
            <h4 className="is-size-5 has-text-weight-semibold has-text-centered-touch is-size-7-touch">$ {item.precio * item.cantidad}</h4>
            <h4 className="is-size-5 has-text-weight-semibold has-text-centered-touch is-size-7-touch">Cantidad: {item.cantidad}</h4>
        </div>
    })

    console.log(resumenCompra);


    return(
        <div>
            <h2 className="title is-3 has-text-centered">Resumen de compra</h2>
            {Object.keys(resumenCompra).length>0
            ?(<section>
                <h3 className="is-size-5 ml-3 my-3"><b>Nombre:</b> {resumenCompra.nombre}</h3>
                <h3 className="is-size-5 ml-3 my-3"><b>Direccion:</b> {resumenCompra.direccion} </h3>
                <h3 className="is-size-5 ml-3 my-3"><b>Total de la compra:</b> $ {resumenCompra.totalCompra}</h3>
                <h3 className="is-size-5 ml-3 my-3 is-size-6-touch"><b>Pedido ID:</b> {docId}</h3>
                <h3 className="is-size-5 ml-3 my-3 is-size-6-touch"><b>Detalle:</b></h3>
                <div>{renderCarritoComprado}</div>
            </section>)
            :<Loading/>
            }

    
        </div>
    )
}

export default ResumenPedido