import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from '../utils/constants.js'
import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URLS.fetchProducts());
    // const response = await axios.get("http://localhost:8001")
    const data = response.data;
    console.log(response)
    if (response.data.success) {
      return {
        data,
        success: true,
      }
    }

    throw new Error(data.message)
  } catch (err) {
    console.log(err)
    return {
      message: err.message,
      success: false,
    }
  }
}

export const fetchProduct = async (id)=>{
  try {
    const response = await axios.get(API_URLS.fetchProductById(id));
    console.log(response)
    const data = response.data;

    if(response.data.success){
      return {
        data,
        success: true
      }
    }

    throw new Error(data.message);

  } catch (err) {
    console.log('Error :', err);
    return {
      message: err.message,
      success: false
    }
  }
}
