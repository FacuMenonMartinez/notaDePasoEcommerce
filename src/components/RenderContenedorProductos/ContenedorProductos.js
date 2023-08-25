import Producto from "../Producto/Producto"

function ContenedorProductos ({arrayProductos, filtro}){

    const productos= arrayProductos.filter((item)=>item.categoria === filtro)

    return(
        <div>

            <div className="columns is-desktop has-background-black p-5 m-2">
            { productos.map(producto=>{
                return <Producto key={producto.id} imagen={producto.img} nombre={producto.nombre} precio={producto.precio} id={producto.id} stock={producto.stock}/>
                })
            }

            </div>

        </div>

    )
}

export default ContenedorProductos