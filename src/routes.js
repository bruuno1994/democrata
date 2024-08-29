import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp