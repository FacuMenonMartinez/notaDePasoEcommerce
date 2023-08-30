import NavBar from "../../components/NavBar/NavBar";
import CarritoContenedor from "../../components/CarritoContenedor/CarritoContenedor";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout (){
    
 
    return(
        <div>
        <NavBar/>
        <CarritoContenedor/>
        <Outlet/>
        <Footer/>

        </div>
    )
}

export default Layout