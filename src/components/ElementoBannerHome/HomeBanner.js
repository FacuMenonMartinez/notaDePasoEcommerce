import { Link } from "react-router-dom";

// claseBanner="bannerIndividual" claseContenedor="elementoBanner elementoBannerInstrumentos" claseContenedorTexto="contenedorTexto" claseTexto="textoBanner"

function ElementoBanner({redireccion, nombreElemento,claseContenedor}){
    return(
        <div className="column px-5 is-full-mobile bannerIndividual">
            <Link to={redireccion} className={`elementoBanner ${claseContenedor}`}>
                <div className="contenedorTexto"  >
                    <h3 className="has-text-white is-size-3 is-size-5-mobile  has-text-centered textoBanner">{nombreElemento}</h3>
                </div>
            </Link>
        </div>
    )
}

export default ElementoBanner