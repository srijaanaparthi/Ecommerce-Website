import {useState} from 'react';
import './CheckOut.css'
import Popup from  './Popup'
import './Popup.css';

function CheckOut(){

const [name,setName]=useState();
const [email,setEmail]=useState("");
const [address, setAddress] = useState("");
const [showPopup,setShowPopup] = useState("");
const handleSubmit=(e) =>{
    e.preventDefault();
    setShowPopup(true);
    setEmail("");
    setName("");
    setAddress("");

}
return(
    <>
     <h1 className='heading'>Customer Details</h1>
    <div className='custdetails'>
       
        <form onSubmit={handleSubmit} style={{alignContent:'center'}}>
            <label style={{fontSize:30,marginInlineEnd:50}}>Name</label>
            <input style={{fontSize:'2500',width:500,height:20}}
            type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
            ></input>
            <br></br>
            <label style={{fontSize:30,marginInlineEnd:50}}>Email</label>
            <input style={{width:500,height:20}}
            type="email"
            placeholder="Enter yourr email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required

            ></input>
            <br></br>
          <label style={{fontSize:30,marginInlineEnd:20}}>Address</label>
            <input style={{width:500,marginInlineStart:0,height:20}}
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          required

            ></input> <br></br>
            <button  style={{textAlign:'center',backgroundColor:'orange',width:100,marginInlineStart:320,padding:5,marginTop:100}}
            onSubmit={handleSubmit}>Submit</button>
        </form>
        {showPopup &&(
            <Popup message ="your order is placed" onClose={()=>setShowPopup(false)}/>
        )}
    </div>
    </>
)



}
export default CheckOut;