import {Link} from 'react-router-dom';
function Layout(){
    return(
        <div className='navigation' >
        <nav >
        
        <Link to='/products'className='l'>Home</Link>
        <Link to='/LandingPage' className='l'>About</Link>
       
        </nav>
         </div>
    )
}
export default Layout;