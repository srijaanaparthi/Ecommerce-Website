import {useState,useEffect} from 'react';
function ProductCard(){
    const [Products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])   
    return(
        <div className="product-card">
            {Products.map(product=>(
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.category}</p>
                    <button>Add to Cart</button>
                    <button>View Details</button>
                </div>
            ))}
        </div>
    )
}
export default ProductCard;

