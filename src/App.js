import CarritoProvider from "./components/Context/ContextCarrito";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Instrumentos from "./pages/Instrumentos/Instrumentos";
import Partituras from "./pages/Partituras/Partituras";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import Checkout from "./pages/Checkout/Checkout";

function App() {

    return (
        <CarritoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/instrumentos" element={<Instrumentos />}></Route>
                        <Route path="/partituras" element={<Partituras />}></Route>
                        <Route path="/producto/:productoNombre" element={<DetalleProducto/>}></Route>
                        <Route path="/checkout" element={<Checkout/>}></Route>
                        <Route path="*" element={<h1>Pagina no encontrada</h1>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </CarritoProvider>


    )



}

export default App;