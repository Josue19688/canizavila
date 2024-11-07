
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home } from "./views/public/Home";
import { Nosotros } from "./views/public/Nosotros";
import { Servicios } from "./views/public/Servicios";
import { Blog } from "./views/public/Blog";
import { Cafecito } from "./views/public/Cafecito";





export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />} >
                    <Route path="/" element={<Home/>} index />
                    <Route path="/nosotros" element={<Nosotros/>} />
                    <Route path="/servicios" element={<Servicios/>} />
                    <Route path="/cafecito" element={<Cafecito/>} />
                    <Route path="/blog" element={<Blog/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}