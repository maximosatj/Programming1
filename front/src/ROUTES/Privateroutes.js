import React from 'react'
import { Route, Routes} from "react-router-dom";
import { UserList } from '../COMPONENTES/UserList/UserList';
import { Home } from '../COMPONENTES/Home/Home';
import { AddProduct } from '../COMPONENTES/AddProduct/AddProduct';
import { ProductList } from '../COMPONENTES/ProductList/ProductList';
import {ListBuy} from '../COMPONENTES/myBuys/myBuys'




export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={ <Home />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/myBuys' element={<ListBuy />} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='*' element= {<Home/>} />
    </Routes>
  )
}