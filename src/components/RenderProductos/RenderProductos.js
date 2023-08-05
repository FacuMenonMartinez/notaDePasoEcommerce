
function RenderProductos( array, categoria){

    let listaFiltrada = array.filter(filtro=>filtro.categoria === categoria)

    return listaFiltrada
}

    export default RenderProductos