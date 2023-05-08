
const Home = (props)=>{

    const {products} = props;

    return (
        <>
            <div className="main">
                <h1 style={{marginBottom: 20}}>Here are some ultimate bikes</h1>
                <div className="products-list">
                    {products.map((product)=>{
                        return (
                            <div className="item">
                                <img src={product.img} alt='product-img' style={styles.image}/>
                                <div>
                                    <p style={{fontWeight: "bold", fontSize: 20}}>{product.name}</p>
                                    <p>{(product.description).split(" ", 25).join(" ")} ......</p>

                                    <p style={{backgroundColor: "lightgreen", display: "inline-block", padding:'2px 5px'}}>{product.stars ? 
                                        <span>
                                            {product.stars} <img src="/images/star.png" alt='star' style={{width: 15, height: 15, verticalAlign: 'top'}} />
                                        </span> 
                                        : 'No ratings yet'}
                                    </p>
                                    <p>Rs. {product.price}</p>

                                    <a href="/view-details">
                                        <button style={styles.button}>View product Details</button>
                                    </a>
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