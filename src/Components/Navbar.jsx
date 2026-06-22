import {Link} from 'react-router-dom';
function Layout(){
    return(
        <nav className='Navbar' >
        <div style={{textAlign:'right'}}>
        <Link to='/products'>Home</Link>
        
        {/* <Link to='/addtocart'>Cart</Link> */}
        <Link to='/LandingPage'>About</Link>
        </div>
        </nav>
    )
}
export default Layout;