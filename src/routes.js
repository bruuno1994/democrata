import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Sapatos from "./pages/Sapatos";
import Roupas from "./pages/Roupas";
import Acessorios from "./pages/Acessorios";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/Sapatos" element={<Sapatos />} />
            <Route path="/Roupas" element={<Roupas />} />
            <Route path="/Acessorios" element={<Acessorios />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp