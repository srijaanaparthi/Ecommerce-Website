import { useState, useEffect } from "react";
import { useParams,Route,Routes, Navigate, useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
function ViewDetails() {
  const { id } = useParams();
const navigate=useNavigate();
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
    <div style={{ textAlign: "center", padding: "30px" }}>
      <img
        src={product.image}
        alt={product.title}
        width="250"
        height="250"
        style={{ objectFit: "contain" }}
      />

      <h2>{product.title}</h2>

      <h3>${product.price}</h3>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>{product.description}</p>
      
      <button onClick={()=>navigate(`/productt/${product.id}`)}>Add to Cart</button>
    </div>
  );
}
function App(){
    return(
        <Routes>
        <Route path="/productt/:id" element={<AddToCart/>}/>
        </Routes>
   )
}

export default ViewDetails;