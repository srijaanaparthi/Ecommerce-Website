
import './App.css';
import ProductCard from './pages/ProductCard';
import { Routes,Route,useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/products');
  };
  return (
    <div className="App">
      <h1>Welcome to our E-commerce Website!</h1>
      <label htmlFor='email'>email</label>
      <input type="email" placeholder="Enter your email" />
      <section>
        <label htmlFor='password'>password</label>
      <input type="password" placeholder="Enter your password" />
      </section>
      <button onClick={handleLogin}>Login</button>

    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductCard />} />
    </Routes>
  );
}
export default App;