import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import Register from "./Components/Register/Register";
import { Provider } from "react-redux";
import store from "./store";

const promise = loadStripe(
  "pk_test_51HxeDPCFRg2ffIwMZSlrnGVUww5BhkvT4Y9mknBi45BqugZySPdBLX557tKk6wpbpS2TBFDgjLd9CmI4mX0AmhMk00GlGDiKY3"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //Will only run once when the app component loads....
    auth.onAuthStateChanged((authUser) => {
      console.log(`THe user is`, authUser);
      if (authUser) {
        //the use just logged in / the was user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM convention
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
