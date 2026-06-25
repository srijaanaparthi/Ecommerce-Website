import './Popup.css';
function Popup({message,oClose}){
return(
    <div className="Popup-overlay">
        <div className="Popup">
        <h2>
            success
        </h2>
        <p>{message}</p>
        <button  className='b' onClick={oClose}>ok</button>
        </div>
</div>
)
}
export default Popup;