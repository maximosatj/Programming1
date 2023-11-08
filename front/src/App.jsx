
import React from "react";
import "./IMAGENES/VinoBlanco.jpeg";
import "./IMAGENES/VinoRosado.jpeg";
import "./IMAGENES/VinoTinto.jpeg";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./COMPONENTES/Navbar/Navbar";
import { UserContext } from "./CONTEXT/UserContext";
import { useState } from 'react';
import { PrivateRoutes as Privateroutes } from './ROUTES/Privateroutes';
import {PublicRoutes} from "./ROUTES/PublicRoutes";

export const App = () => {
  const [ user, setUser ] = useState({
    role: '',
    logged: false,
    id:''
  })

  return (
    <>
       <UserContext.Provider value={{ user, setUser }} >
        <Navbar />
        <Routes>
          {
            user.logged ? (
              <Route path="/*" element={<Privateroutes />} /> 
            ):(
              <Route path="/*" element={<PublicRoutes />} />
            )
          } 
        </Routes>
      </UserContext.Provider> 
      
    </>
  );
};
export default App;
