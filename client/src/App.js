import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import Register from "./Components/Register/Register";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import Address from "./Components/Address/Address";
import ProductPreview from "./Components/ProductPreview/ProductPreview";
import { io } from "socket.io-client";

const promise = loadStripe(
  "pk_test_51HxeDPCFRg2ffIwMZSlrnGVUww5BhkvT4Y9mknBi45BqugZySPdBLX557tKk6wpbpS2TBFDgjLd9CmI4mX0AmhMk00GlGDiKY3"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    /* Setting the socket io app */
    const socket = io("http://localhost:7000/api/socket", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.on("connect", () => {
      console.log("CONNECTION SOCK", socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on("productChange", (productData) => {
      console.log("Product Data----------XXXXXXfff--------->", productData);
    });

    //check the authetication of the user
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      //Decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);

      //set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      //dispatch to the react context to share user details in full form
      const userDetails = {
        avatar: decoded.avatar,
        id: decoded.id,
        name: decoded.name,
      };
      dispatch({
        type: "SET_USER",
        user: userDetails,
      });

      //check if the token expired
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        //logout user
        store.dispatch(logoutUser());
        //Redirect to login
        window.location.href = "/";
      }
    }
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
            <Route path="/address">
              <Header />
              <Address />
            </Route>
            <Route path="/product_preview/:id">
              <Header />
              <ProductPreview />
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
