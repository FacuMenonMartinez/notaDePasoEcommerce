import Producto from "../Producto/Producto"

function ContenedorProductos ({arrayProductos, filtro}){

    const productos= arrayProductos.filter((item)=>item.categoria === filtro)

    return(
        <div>

            <div className="is-flex p-5 is-justify-content-center has-background-black m-3 has-text-centered">
            { productos.map(producto=>{
                return <Producto key={producto.id} imagen={producto.img} nombre={producto.nombre} precio={producto.precio} id={producto.id} stock={producto.stock}/>
                })
            }
            </div>

        </div>

    )
}

export default ContenedorProductos