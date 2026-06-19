import { useState ,useEffect} from "react";
import axios from'axios';
import { useParams } from "react-router-dom";
const {id} = useParams();
function ViewDetails(){
    const [Products,setProducts]=useState([]);
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products/${id}')
        .then(res=>{
            setProducts(res.data)
        });
    },[id])
    return(
        <div>
            
        </div>
    );
} 
