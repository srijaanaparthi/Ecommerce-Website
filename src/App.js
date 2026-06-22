
import './App.css';
// import './banner-shopingg.jpg';
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
    navigate('/landingPage');
  };
  return (
    <div className="App">
      <div className='content'>
      <h1 style={{textAlign:'center'}}>Welcome to our E-commerce Website!</h1>
      <form>
      <label htmlFor='email'>email</label>
         
      <input  type="email" placeholder="Enter your email"  required />
      <section>
        <label htmlFor='password'>password</label>
      <input type="password" placeholder="Enter your password" required />
      </section>
      <button style={{textAlign:'center',marginInlineStart:700}}
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