import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";

import  { LoginForm } from '../COMPONENTES/LoginForm/LoginForm';
import { Register } from '../COMPONENTES/Register/Register';
import { Home } from '../COMPONENTES/Home/Home';


export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}