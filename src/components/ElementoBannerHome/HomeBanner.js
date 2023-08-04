import { Link } from "react-router-dom";


function ElementoBanner({redireccion, nombreElemento,claseBanner, claseContenedor,claseContenedorTexto, claseTexto}){
    return(
        <div className={claseBanner}>
            <Link to={redireccion} className={claseContenedor} >
                <div className={claseContenedorTexto}  >
                    <h3 className={claseTexto}>{nombreElemento}</h3>
                </div>
            </Link>
        </div>
    )
}

export default ElementoBanner