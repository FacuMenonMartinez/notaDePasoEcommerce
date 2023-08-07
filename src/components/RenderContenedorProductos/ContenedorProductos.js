import Producto from "../Producto/Producto"

function ContenedorProductos ({arrayProductos}){


    return(
        <div className="is-flex is-flex-grow-1 is-flex-shrink-1	is-flex-wrap-wrap p-3 is-justify-content-center		 has-background-black m-3 has-text-centered">
            { arrayProductos.map(producto=>{
        return <Producto key={producto.id} imagen={producto.img} nombre={producto.nombre} precio={producto.precio} id={producto.id}/>
    })
}
        </div>
    )
}

export default ContenedorProductos