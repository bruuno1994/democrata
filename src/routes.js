import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Sapatos from "./pages/Sapatos";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/Sapatos" element={<Sapatos />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp