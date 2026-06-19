function CheckOut(){
    return(
        <div>
            <label htmlFor="name"> Full name</label>
            <input value={"name"} type="text"/>
            {/* <label htmlFor="email">email</label>
            <input value={Email} type="email"/> */}
            <label htmlFor="phone">Phone </label>
            <input value={Number} type="tel"/>

        </div>
    )
}
export default CheckOut;