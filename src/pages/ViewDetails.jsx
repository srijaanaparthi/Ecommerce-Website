import { useState, useEffect } from "react";
import { useParams,Route,Routes, Navigate, useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
import CheckOut from "./CheckOut";
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
<section className="product-details">
      <h2 style={{fontSize:'500%'}}>{product.title}</h2>

      <h3 style={{fontSize:'250%'}}>${product.price}</h3>

      <p style={{fontSize:'250%'}}>
        <strong>Category:</strong> {product.category}
      </p>

      <p style={{fontSize:'200%'}}>{product.description}</p>
      
      <button  style={{fontSize:'250%',backgroundColor:'orange'}}onClick={()=>navigate(`/productt/${product.id}`)}>Add to Cart</button>
      </section>
    </div>
  );
}
function App(){
    return(
        <Routes>
        <Route path="/productt/:id" element={<AddToCart/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
        </Routes>
   )
}



export default ViewDetails;