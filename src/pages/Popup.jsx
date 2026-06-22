function Popup({message,oClose}){
return(
    <div className="Popup-overlay">
        <div className="Popup">
        <h2>
            success
        </h2>
        <p>{message}</p>
        <button onClick={onclose}>ok</button>
        </div>
</div>
)
}
export default Popup;