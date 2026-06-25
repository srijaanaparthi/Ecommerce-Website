import {useState,useEffect} from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import  './ProductCard.css'
import ViewDetails from './ViewDetails.jsx'
import AddToCart from './AddToCart.jsx';
import '../assets/viewimage.png';
function ProductCard(){
    const navigate = useNavigate();
    const [Products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])   
    return(
        <>
        <div className='background'>
            <h2>our products</h2>
            <div className='overlay'>
            
        <div className="product-card">
            
            {Products.map(product=>(
                <div key={product.id} className="product">
                    
                    <img src={product.image} alt={product.title} />
                    <h2 className='name'>{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.category}</p>
                    <button className='bttn' style={{alignItems:'center' ,justifyContent:'center'}} onClick={() => navigate(`/productt/${product.id}`)}>Add to Cart</button>
                    <button className='bttn'  onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                 
                </div>
            ))}
            
        </div>
        </div>
        </div>
 <Routes>
            <Route path="/product" element={<ProductCard/>}/>
            <Route path="/product/:id" element={<ViewDetails/>}/>
            <Route path="/productt/:id" element={<AddToCart/>}/>
        </Routes>
        </>
    )
}

export default ProductCard;

