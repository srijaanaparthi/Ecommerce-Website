import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewDetails() {
  const { id } = useParams();

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

      <button>Add to Cart</button>
    </div>
  );
}

export default ViewDetails;