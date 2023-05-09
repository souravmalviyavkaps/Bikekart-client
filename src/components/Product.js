import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchProduct} from '../api';


const Product = ()=>{

    const [product, setProduct] = useState([]);

    const {id} = useParams();

    useEffect(()=>{

        const getProductById = async ()=>{
            const response = await fetchProduct(id);
            const data = response.data.data;
            setProduct(data);
        }

        getProductById();

    }, [])

    return (
        <>
            <div className='container' >
                <div className="product row">
                    <img src={product.img} alt='product-img' className='col col-lg-4 col-sm-12' />
                    <div className='col col-lg-8 col-sm-12'>
                        <p style={{fontWeight: "bold", fontSize: 20}}>{product.name}</p>
                        <p style={{backgroundColor: "lightgreen", display: "inline-block", padding:'1px 3px', borderRadius: '5px'}}>
                            {product.stars ? 
                            <span>
                                {product.stars} <img src="/images/star.png" alt='star' style={{width: 15, height: 15, verticalAlign: 'top'}} />
                            </span> 
                            : 'No ratings yet'
                        }
                        </p>

                        <p>{console.log(product.ratings)}</p>
                        <p style={styles.price}>Rs. {product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>

                

                <div className='review-rating-list row'>

                    <div className='col-lg-4 col-sm-0'></div>
                    <div className='col-lg-8 col-sm-12'>
                    <hr/>
                    <h2 style={{color: "blue"}}> Ratings and Reviews
                        <Link to={'/rate-product/' + product._id}>
                            <button style={{display: "inline-block", fontSize: 20, marginLeft: 50}}> Rate Product</button>
                        </Link>
                    </h2>
                        {product.ratings && product.ratings.length ?  product.ratings.map((rating)=>{
                            return (
                                <>
                                    <p style={{backgroundColor: "lightgreen", display: "inline-block", padding:'1px 3px', borderRadius: '5px'}}> 
                                        <span>
                                            {rating.stars} <img src="/images/star.png" alt='star' style={{width: 15, height: 15, verticalAlign: 'top'}} />
                                        </span>
                                    </p>

                                    <p>
                                        {rating.review}
                                    </p>
                                    <p style={{color: 'grey', fontSize: 'small'}}> 
                                        {rating.user.fname + " " + rating.user.lname}
                                    </p>
                                    <hr/>
                                </>
                            )
                        }) : <p>"No ratings yet </p>}
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

const styles = {
    price: {
        fontSize: 25
    }
}

export default Product;