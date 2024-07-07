import "./styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import React, { useState, useEffect } from "react";
function App() {
  const [cartNumber, setcartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div className="App mx-auto">
      <Cart show={show} setShow={setShow} cart={cart} />
      <Navbar
        cartNumber={cartNumber}
        setcartNumber={setcartNumber}
        show={show}
        setShow={setShow}
      />
      <Home
        cartNumber={cartNumber}
        setcartNumber={setcartNumber}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
