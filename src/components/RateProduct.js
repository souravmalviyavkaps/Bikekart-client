import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rateProduct } from '../api';
import ReactStars from 'react-rating-stars-component';

const RateProduct = ()=>{

    const navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem('token')){
            navigate('/login')
        }
    }, [])

    const {productid} = useParams();
    const [rating, setRating] = useState();
    const [review, setReview] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();

       const body = {
            stars: rating,
            review: review,
            userid: localStorage.getItem('user_id'),
            productid
       }

       const response = await rateProduct(body);

       console.log(response);
       
       if(response.success){
        // navigate('/view-details/'+productid);
        navigate('/')
       }else {
            alert(response.message)
       }
    }

    return (
        <>
            <h2>Rate Product</h2>
            <form onSubmit={handleSubmit}>
                {/* <select name="rating" onChange={(e)=>setRating(e.target.value)} style={styles.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> */}

                < ReactStars
                    isHalf={false}
                    size={40}
                    onChange={(rating)=> setRating(rating)}
                />
                <textarea cols='60' rows='7' style={styles.review} onChange={(e)=> setReview(e.target.value)} placeholder='Write your review about product'></textarea>
                <input type="submit" value="Post Review" style={styles.button}/>
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