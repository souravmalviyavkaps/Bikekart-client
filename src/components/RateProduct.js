import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { rateProduct } from '../api';

const RateProduct = ()=>{

    const {productid} = useParams();
    const [rating, setRating] = useState();
    const [review, setReview] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();

       const body = {
            stars: parseInt(rating),
            review: review,
            userid: '6454a971027eab9ca9b8713a',
            productid
       }

       const response = await rateProduct(body);

       console.log(response);
        
    }

    return (
        <>
            <h2>Rate Product</h2>
            <form onSubmit={handleSubmit}>
                <select name="rating" onChange={(e)=>setRating(e.target.value)} style={styles.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea style={styles.review} onChange={(e)=> setReview(e.target.value)} placeholder='Write your review about product'></textarea>
                <input type="submit" value="Submit" style={styles.button}/>
            </form>
        </>
    )
}

const styles = {
    rating: {
        display: 'block',
        width: 300,
        marginBottom: 30,
        marginLeft: 30
    },
    review: {
        display: 'block',
        marginLeft: 30,
        color: 'grey',
        fontSize: 18
    },
    button: {
        display: 'block',
        padding: 5,
        margin: 30
    }

}

export default RateProduct;