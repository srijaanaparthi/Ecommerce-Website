import {useState,useEffect} from 'react';
function CheckOut(){

const [name,setName]=useState();
const [email,setEmail]=useState("");
// cons [address,setAddress]=useState("");
const handleSubmit=(e) =>{
    e.preventDefault();
    alert(
        'ordered successfully'
    );
    setEmail("");
    setName("");
    // setAddress("");

}
return(
    <div>
        <h1>Customer Details</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
            ></input>
            <label>Email</label>
            <input 
            type="email"
            placeholder="Enter yourr email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
            {/* <label>Address</label>
            <input
            type="text"
            placeholder="Enter your address"
            value={address}
            ></input> */}
        </form>
    </div>
)



}
export default CheckOut;