import Producto from "../Producto/Producto"

function ContenedorProductos ({arrayProductos}){

    arrayProductos.map(producto=>{
        return producto
    })


    return(
        <div className="has-background-black m-3 has-text-centered	 ">
            <h1 className="has-text-white">Soy el contenedor de Productos</h1>
            <Producto imagen={producto.img} nombre={producto.nombre} precio={producto.precio} id={producto.id} />
        </div>
    )
}

export default ContenedorProductos