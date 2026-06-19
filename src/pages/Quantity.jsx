import {useState} from 'react';
function QuantityDropdown(){
    const [quantity,setQuantity] = useState(1);
    const maxQuantity=30;
    const option=Array.from({length:maxQuantity},(_,i)=>i+1);
    return(
        <div>
            <label htmlFor='quantity'>
                Quantity
            </label>
            <select id="quantity style={{width:50}}"
            value={quantity}
            onChange={(e)=>setQuantity(Number(e.target.value))}>
                {option.map((num)=>(
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
        </div>
    )
}
export default QuantityDropdown;