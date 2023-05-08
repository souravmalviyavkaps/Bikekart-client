import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import {fetchProduct} from '../api';


const Product = ()=>{

    const [product, setProduct] = useState();

    const {id} = useParams();
    fetchProduct(id);

    return (
        <>
            <div className="product">
                
            </div>
        </>
    )
}

export default Product;