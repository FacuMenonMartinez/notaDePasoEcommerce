
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

function Footer (){
    return(
        <div className="footer p-5 has-text-white is-flex is-justify-content-space-between	">
            <div className="">
                <h4> Sitio creado y diseñado por Facundo Menon Martinez</h4>
            </div>
            <div className="is-flex is-flex-direction-column is-align-items-center">
                <h4>Mis redes</h4>
                <div className="is-flex">
                    <a href="https://github.com/FacuMenonMartinez?tab=repositories" target="_blank"><img className="image p-1 is-48x48" src={github}/></a>
                    <a href="https://www.linkedin.com/in/facundo-menon-martinez-870947258/" target="_blank"><img className="image p-1 is-48x48" src={linkedin}/></a>
                </div>
            </div>

        </div>
    )
}

export default Footer