import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Instrumentos from "./pages/Instrumentos/Instrumentos";
import Partituras from "./pages/Partituras/Partituras";
import Contacto from "./pages/Contacto/Contacto";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";

function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/instrumentos" element={<Instrumentos />}></Route>
                        <Route path="/partituras" element={<Partituras />}></Route>
                        <Route path="/:productoNombre" element={<DetalleProducto />}></Route>
                        <Route path="/contacto" element={<Contacto />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>

    )



}

export default App;