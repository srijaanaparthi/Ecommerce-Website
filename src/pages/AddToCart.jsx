import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuantityDropdown from "./Quantity";
import CheckOut from "./CheckOut";
function AddToCart() {
  const { id } = useParams();

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

      <p>
        <strong>Category:</strong> {Cartproductt.category}
      </p>

      <p>{Cartproductt.description}</p>
      <QuantityDropdown/>
      <button onClick={CheckOut}>Buy Now</button>
    </div>
  );
}


export default AddToCart;
    