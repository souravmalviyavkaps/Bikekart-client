import { useEffect, useState } from 'react';
import {Home, Navbar, Login, Register, Product, RateProduct, Profile} from './';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/index.css';

function App() {



  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/view-details/:id' element={<Product />} ></Route>
        <Route path='/rate-product/:productid' element={<RateProduct/>}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
