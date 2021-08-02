import React,{useEffect,unsubscribe} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import { useStateValue } from './components/StateProvider';
import {auth} from "./components/firebase";

function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
return () =>{
  unsubscribe();
}

  }, []);
console.log("User is :",user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
              <Payment />
            {/* </Elements> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
