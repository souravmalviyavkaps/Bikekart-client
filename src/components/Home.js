import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getProducts} from '../api';

const Home = ()=>{

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
  
    const location = useNavigate();

    const handleViewDetails = (e)=>{
        location('/view-details/'+e.target.id);
    }

    return (
        <>
            <div className="main">
                <h1 style={{marginBottom: 20}}>Here are some ultimate bikes</h1>
                <div className="products-list">
                    {products.map((product)=>{
                        return (
                            <div className="item" id={product._id} >
                                <img src={product.img} alt='product-img' style={styles.image}/>
                                <div>
                                    <p style={{fontWeight: "bold", fontSize: 20}}>{product.name}</p>
                                    <p>{(product.description).split(" ", 25).join(" ")} ......</p>

                                    <p style={{backgroundColor: "lightgreen", display: "inline-block", padding:'2px 5px'}}>{product.stars ? 
                                        <span>
                                            {product.stars} <img src="/images/star.png" alt='star' style={{width: 15, height: 15, verticalAlign: 'top'}} />
                                        </span> 
                                        : 'No ratings yet'
                                        }
                                    </p>
                                    <p>Rs. {product.price}</p>

                                    <button onClick={handleViewDetails} style={styles.button} id={product._id}>
                                        View product Details
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const styles = {
    image: {
        width: '90%',
        height: 200,
        borderRadius: 20,
        padding: 5
    },
    button: {
        borderRadius: 10,
        backgroundColor: 'rgb(93, 90, 90)',
        color: "white",
        padding: 8
    }
}

export default Home;