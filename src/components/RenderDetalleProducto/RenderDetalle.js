import "./renderDetalle.css";
import BotonAgregarCarrito from "../BotonAgregarCarrito/BotonAgregarCarrito";

function RenderDetalle({ producto }) {
    const { nombre, descripcion, precio, img, id, stock } = producto


    return (
        <div>
            <h1 className="title is-size-4-mobile has-text-centered-mobile ml-3 mt-3">{nombre}</h1>
            <div className="p-3 columns is-gapless is-multiline is-mobile">
            <div className="column is-three-quarter is-full-mobile image is1by1">
                <img className="mx-auto imagen"src={img}></img>
            </div>
            <div className="column is-full-mobile">
                <p className="is-size-3 is-size-4-mobile has-text-black has-text-weight-bold has-text-centered">${precio}</p>
                <BotonAgregarCarrito stock={stock} datosProducto={{nombre, precio, img, id}}/>
            </div>
            <div className="box has-background-grey-lighter my-3 column is-full ">
                <p className="has-text-black is-size-4 is-size-5-mobile has-text-centered-mobile p-3 " >Descripcion: <br/>{descripcion}</p>
            </div>

            </div>

        </div>
    )
}

export default RenderDetalle