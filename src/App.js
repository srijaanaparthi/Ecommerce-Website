
import './App.css';
import ProductCard from './pages/ProductCard';
import ViewDetails from './pages/ViewDetails';
import AddToCart from './pages/AddToCart';
import { Routes,Route,useNavigate,useLocation } from 'react-router-dom';
import CheckOut from './pages/CheckOut';
import LandingPage from './pages/LandingPage'
import Navbar from './Components/Navbar';
function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/LandingPage');
  };
  return (
    <div className="App">
      <div className='container-card'>
      <h1 >Welcome to our E-commerce Website!</h1>
      <form className='inputs'>
      <label htmlFor='email'>email</label>
         
      <input  type="email" placeholder="Enter your email"  required />
      <br></br>
      <section>
        <label htmlFor='password'>password</label>
      <input type="password" placeholder="Enter your password" required />
      </section>
      <button className='click'
      onClick={handleLogin}>Login</button>
      </form>
       </div>
    </div>
  );
}
function App() {
  
  const location = useLocation();
  return (
   <div className='background'>
    {location.pathname !== "/" && <Navbar />}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductCard />} />
      <Route path='/product/:id' element={<ViewDetails/>}/>
       <Route path='/productt/:id' element={<AddToCart/>}/>
       <Route path='/CheckOut'element={<CheckOut/>}/>
       <Route path='/LandingPage'element={<LandingPage/>}/>
       <Route path='/cart' element={<AddToCart/>}/>
    </Routes>
    </div>
  );
}
export default App;