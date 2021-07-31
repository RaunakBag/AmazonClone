import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import CheckoutProduct from './components/CheckoutProduct/CheckoutProduct';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Orders from './components/Orders/Orders';
import Payment from './components/Payment/Payment';
import Product from './components/Product/Product';
import Subtotal from './components/Subtotal/Subtotal';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Home */}
      <Home/>
      {/* Checkout */}
      <Checkout/>
      {/* CheckoutProduct */}
      <CheckoutProduct/>
      {/* Login */}
      <Login/>
      {/* Order */}
      <Order/>
      {/* Orders */}
      <Orders/>
      {/* Payment */}
      <Payment/>
      {/* Product */}
      <Product/>
      {/* Subtotal */}
      <Subtotal/>
    </div>
  );
}

export default App;
