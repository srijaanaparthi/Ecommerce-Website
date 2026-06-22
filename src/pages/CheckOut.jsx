import {useState} from 'react';
import './CheckOut.css'
function CheckOut(){

const [name,setName]=useState();
const [email,setEmail]=useState("");
const [address, setAddress] = useState("");
const handleSubmit=(e) =>{
    e.preventDefault();
    alert(
        'ordered successfully'
    );
    setEmail("");
    setName("");
    setAddress("");

}
return(
    <>
     <h1 className='heading'>Customer Details</h1>
    <div className='custdetails'>
       
        <form onSubmit={handleSubmit} style={{alignContent:'center'}}>
            <label>Name</label>
            <input className='ipt'
            type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
            ></input>
            <br></br>
            <label>Email</label>
            <input className='ipt'
            type="email"
            placeholder="Enter yourr email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
          <label>Address</label>
            <input className='ipt'
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            ></input> <br></br>
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
)



}
export default CheckOut;