
const API_ROOT = `http://localhost:8001`;

export const API_URLS = {
    //users
    create: ()=> `${API_ROOT}/users/create`,
    createSession: ()=> `${API_ROOT}/users/create-session`,
    profile: ()=> `${API_ROOT}/users/profile`,

    //products and ratings
    addProduct: ()=> `${API_ROOT}/products/add-product`,
    fetchProducts: ()=> `${API_ROOT}`,
    fetchProductById: (id)=> `${API_ROOT}/products/fetch-product/${id}`,
    fetchRating: (productId)=> `${API_ROOT}/products/fetch-rating/${productId}`,
    rateProduct: ()=> `${API_ROOT}/products/rate-product`
}
