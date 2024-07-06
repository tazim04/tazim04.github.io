import "./styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import React, { useState } from "react";
function App() {
  const [cartNumber, setcartNumber] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className="App mx-auto">
      <Navbar cartNumber={cartNumber} setcartNumber={setcartNumber} />
      <Home cartNumber={cartNumber} setcartNumber={setcartNumber} />
    </div>
  );
}

export default App;
