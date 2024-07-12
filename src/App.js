import "./styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Flyer from "./Flyer";
import Contact from "./Contact";
import Footer from "./Footer";
import ShippingInfo from "./ShippingInfo";
import PickUp from "./PickUp";
import SearchResult from "./SearchResult";
import PaymentInfo from "./PaymentInfo";
import CheckOut from "./CheckOut";
import Confirmation from "./Confirmation";
import Profile from "./Profile";
import Blog from "./Blog";
import About from "./About";
import FAQ from "./FAQ";

import React, { useState, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("shipping");
  const [orders, setOrders] = useState([]);
  const [lang, setLang] = useState("EN");

  return (
    <Router basename="/teekay-groceries">
      <ToastContainer
        position="top-right"
        autoClose={500}
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
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
        />
        <Navbar
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
          show={show}
          setShow={setShow}
          lang={lang}
          setLang={setLang}
        />
        <Switch>
          <Route exact path="/">
            <Home
              cartNumber={cartNumber}
              setCartNumber={setCartNumber}
              cart={cart}
              setCart={setCart}
              lang={lang}
            />
          </Route>
          <Route path="/flyer">
            <Flyer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/search">
            <SearchResult
              cart={cart}
              setCart={setCart}
              setCartNumber={setCartNumber}
              lang={lang}
            />
          </Route>
          <Route path="/shipping">
            <ShippingInfo form={form} setForm={setForm} />
          </Route>
          <Route path="/pickup">
            <PickUp form={form} setForm={setForm} />
          </Route>
          <Route path="/payment">
            <PaymentInfo form={form} setForm={setForm} />
          </Route>
          <Route path="/checkout">
            <CheckOut
              cart={cart}
              form={form}
              setCart={setCart}
              cartNumber={cartNumber}
              setCartNumber={setCartNumber}
              selectedRadio={selectedRadio}
              orders={orders}
              setOrders={setOrders}
            />
          </Route>
          <Route path="/confirmation">
            <Confirmation cartNumber={cartNumber} orders={orders} />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route>
            <Profile orders={orders} setOrders={setOrders} />
          </Route>
        </Switch>
      </div>
      <Footer lang={lang} />
    </Router>
  );
}

export default App;
