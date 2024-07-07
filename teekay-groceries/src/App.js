import "./styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Flyer from "./Flyer";
import Contact from "./Contact";
import Footer from "./Footer";
import SearchResult from "./SearchResult";

import React, { useState, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="App mx-auto">
        <Cart
          show={show}
          setShow={setShow}
          cart={cart}
          setCart={setCart}
          setCartNumber={setCartNumber}
        />
        <Navbar
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
          show={show}
          setShow={setShow}
        />
        <Switch>
          <Route exact path="/">
            <Home
              cartNumber={cartNumber}
              setCartNumber={setCartNumber}
              cart={cart}
              setCart={setCart}
            />
          </Route>
          <Route path="/flyer">
            <Flyer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/search">
            <SearchResult
              cart={cart}
              setCart={setCart}
              setCartNumber={setCartNumber}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
