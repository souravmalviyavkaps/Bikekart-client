import { useEffect, useState } from 'react';
import {getProducts} from '../api';
import {Home, Navbar} from './';
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
    <div className="App">
      <Navbar/>
      <Home products={products} />
    </div>
  );
}

export default App;
