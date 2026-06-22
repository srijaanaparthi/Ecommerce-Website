import { useState } from "react";
import "./CheckOut.css";
import Popup from "./Popup";

function CheckOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h1>Customer Details</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Place Order
          </button>

        </form>
      </div>

      {showPopup && (
        <Popup
          message="🎉 Your order has been placed successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default CheckOut;