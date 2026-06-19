import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CheckOut from "./CheckOut";
function AddToCart() {
  const { id } = useParams();
const navigate=useNavigate();
  const [Cartproductt, setCartProductt] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCartProductt(data));
  }, [id]);

  if (!Cartproductt) {
    return <h2>Loading...</h2>;
  }
  return(
    
        <div style={{ textAlign: "left", padding: "30px" }}>
      <img
        src={Cartproductt.image}
        alt={Cartproductt.title}
        width="250"
        height="250"
        style={{ objectFit: "contain" }}
      />

      <h2>{Cartproductt.title}</h2>

      <h3>${Cartproductt.price}</h3>

    
      <QuantityDropdown Cartproductt={Cartproductt}/>
     
      <button onClick={()=>navigate("/CheckOut")}>Buy Now</button>

    </div>
  );
}
function QuantityDropdown({Cartproductt}){
    const [quantity,setQuantity] = useState(1);

    const maxQuantity=30;
    const option=Array.from({length:maxQuantity},(_,i)=>i+1);
    return(
        <div>
            <label htmlFor="quantity">
                Quantity
            </label>
            <select id="quantity" style={{width:50}}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}>
                {option.map((num) => (
                    <option key={num} value={num}>{num}</option>
                ))}
                
            </select>
           <h3>
                Total Price: ${(Cartproductt.price * quantity).toFixed(2)}
          </h3>


</div>)}
export default AddToCart;
    