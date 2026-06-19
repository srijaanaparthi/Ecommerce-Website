
import './App.css';
import ProductCard from './pages/ProductCard';
import ViewDetails from './pages/ViewDetails';
import AddToCart from './pages/AddToCart';
import { Routes,Route,useNavigate } from 'react-router-dom';
import CheckOut from './pages/CheckOut';
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/products');
  };
  return (
    <div className="App">
      <h1>Welcome to our E-commerce Website!</h1>
      <form>
      <label htmlFor='email'>email</label>
      <input  type="email" placeholder="Enter your email"  />
      <section>
        <label htmlFor='password'>password</label>
      <input type="password" placeholder="Enter your password" required />
      </section>
      <button onClick={handleLogin}>Login</button>
      </form>

    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductCard />} />
      <Route path='/product/:id' element={<ViewDetails/>}/>
       <Route path='/productt/:id' element={<AddToCart/>}/>
       <Route path='/productt/:id' element={<CheckOut/>}/>
    </Routes>
  );
}
export default App;