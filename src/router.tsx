
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home } from "./views/public/Home";
import { Nosotros } from "./views/public/Nosotros";
import { Servicios } from "./views/public/Servicios";
import { Blog } from "./views/public/Blog";
import { Cafecito } from "./views/public/Cafecito";

import PrivateLayout from './layouts/PrivateLayout';
import { Dashboard } from './views/private/Dashboard';
import { CreateArticulo } from "./components/private/CreateArticulo";
import { ArticulosAll } from "./components/private/ArticulosAll";
import { CursosAll } from "./components/private/CursosAll";
import { CreateCursos } from "./components/private/CreateCursos";
import { Login } from "./views/public/Login";
import AuthLayout from "./layouts/AuthLayout";





export default function Router() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route element={<PublicLayout />} >
                    <Route path="/" element={<Home/>} index />
                    <Route path="/nosotros" element={<Nosotros/>} />
                    <Route path="/servicios" element={<Servicios/>} />
                    <Route path="/cafecito" element={<Cafecito/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/login" element={<Login/>} />
                </Route>
                <Route element={<AuthLayout />} >
                    <Route path="/auth/login" element={<Login/>} index/>
                </Route>
                <Route element={<PrivateLayout />} >
                    <Route path="/private/dashboard" element={<Dashboard/>} index />
                    <Route path="/private/articulosAll" element={<ArticulosAll/>}/>
                    <Route path="/private/createArticulo" element={<CreateArticulo/>}/>
                    <Route path="/private/cursosAll" element={<CursosAll/>}/>
                    <Route path="/private/createCursos" element={<CreateCursos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}