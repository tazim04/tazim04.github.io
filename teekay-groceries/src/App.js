import "./styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Flyer from "./Flyer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [cartNumber, setcartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Router>
      <div class="App mx-auto">
        <Cart
          show={show}
          setShow={setShow}
          cart={cart}
          setCart={setCart}
          setCartNumber={setcartNumber}
        />
        <Navbar
          cartNumber={cartNumber}
          setcartNumber={setcartNumber}
          show={show}
          setShow={setShow}
        />
        <Switch>
          <Route exact path="/">
            <Home
              cartNumber={cartNumber}
              setcartNumber={setcartNumber}
              cart={cart}
              setCart={setCart}
            />
          </Route>
          <Route path="/flyer">
            <Flyer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
