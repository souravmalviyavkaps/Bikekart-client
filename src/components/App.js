import { useEffect, useState } from 'react';
import {getProducts} from '../api';
import {Home, Navbar, Login, Register, Product, RateProduct} from './';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/index.css';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async ()=>{
    const response = await getProducts();

    const data = response.data.data;
    setProducts(data);
  }

  //useEffect hook
  useEffect(()=>{
    
    fetchProducts();

  }, []);


  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/view-details/:id' element={<Product />} ></Route>
        <Route path='/rate-product/:productid' element={<RateProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
