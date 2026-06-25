import { useState, useEffect } from "react";
import { useParams,Route,Routes, useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart.jsx";
import CheckOut from "./CheckOut.jsx";
import './ViewDetails.css'
import '../assets/viewimage.png';
function ViewDetails() {
  const { id } = useParams();
const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="card" >
      <div id="content">
      <img
        src={product.image}
        alt={product.title}
        width="350"
        height="350"
        
      />
<div id="product-details">
      <h2 className="head" >{product.title}</h2>

      <h3 >${product.price}</h3>

      <p >
        <strong>Category:</strong> {product.category}
      </p>

      <p >{product.description}</p>
      
      <button  className="bnt" onClick={()=>navigate(`/productt/${product.id}`)}>Add to Cart</button>
      </div>
      <div>
        <Routes>
        <Route path="/productt/:id" element={<AddToCart/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
        </Routes>
      </div>
    </div>
    </div>
  );
}




export default ViewDetails;