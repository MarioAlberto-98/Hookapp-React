import { Route, Routes, Navigate } from "react-router-dom"
import{HomePage} from './HomePage';
import {AboutPage} from './AboutPage';
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp=()=>{
    return(
       
        <UserProvider> {/* UserProvider es el que contiene todos los datos, y los manda a los componentes*/} 
            <h1>MainApp</h1>
            <Navbar/>
            <hr /> 
            {/*Rutas para llegar a un componente  */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="login" element={<LoginPage />}/>
                {/* <Route path="/*" element={<LoginPage />}/> */}

                <Route path="/*" element={<Navigate to="/about"/>}/> 
                {/* <Navigate to="/about"/> ---> Es una herramienta de react-router-dom  */}
                {/* Lo que hace es hacer por default la ruta /about  */}
            </Routes> 
            
        </UserProvider>
       
    )
}