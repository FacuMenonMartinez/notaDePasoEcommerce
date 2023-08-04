import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout (){
    return(
        <div>
        <NavBar/>
        <Outlet/>
        <Footer/>

        </div>
    )
}

export default Layout