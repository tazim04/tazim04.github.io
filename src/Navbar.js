import "./styles/Navbar.css";
import profile from "./assets/profile.png";
import cart from "./assets/shopping-cart-icon.png";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import groceryItems from "./groceryItems";

const Navbar = ({ cartNumber, setcartNumber, show, setShow }) => {
  const [search, setSearch] = useState("");

  const history = useHistory(); // used to redirect to search page

  const handleCartClick = () => {
    console.log("Cart clicked! show: " + show);
    setShow(!show); // toggle the cart
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value); // update search state
    console.log("handleSearchChange: " + search);
  };

  const handleSearchSubmit = (e) => {
    console.log("handleSearchSubmit: " + search);
    e.preventDefault(); // prevent form from refreshing page
    history.push(`/search?search=${encodeURIComponent(search)}`); // redirect to search page
  };

  return (
    <div style={{ padding: "0px", zIndex: 1000 }}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" style={{ padding: "0px" }}>
          <Link
            class="navbar-brand"
            to="/"
            style={{
              fontFamily: "verdana",
              color: "#358D2D",
              fontSize: "35px",
              position: "relative",
              top: "-11.5px",
              left: "15px",
            }}
          >
            TeeKay Groceries
          </Link>
          <div
            class="ps-5 me-auto pe-5"
            style={{
              position: "relative",
              top: "-11.5px",
              width: "75%",
            }}
          >
            <form
              class="d-flex "
              role="search"
              id="searchForm"
              onSubmit={handleSearchSubmit}
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div
            class="userCorner container-fluid"
            style={{
              background: "#75DA6D",
              height: "80px",
              width: "300px",
              position: "relative",
              top: "-11.5px",
            }}
          >
            <div
              class="vertical-center"
              style={{
                display: "inline-flex",
              }}
            >
              <img
                src={profile}
                style={{ width: "50px", height: "auto", margin: "0" }}
                alt="profile
            "
              />
              <div
                class="signIn"
                style={{ display: "flex", alignItems: "center", margin: "0" }}
              >
                <button class="btn">Sign In</button>
              </div>

              <div class="cart">
                <input
                  type="image"
                  src={cart}
                  name="saveForm"
                  class="btTxt cartIcon"
                  style={{
                    width: "50px",
                    marginLeft: "25px",
                    paddingTop: "6px",
                    paddingRight: "10px",
                  }}
                  onClick={handleCartClick}
                />
              </div>
              <div
                class="cartNumber"
                style={{ paddingRight: "10px", fontWeight: "bold" }}
              >
                {cartNumber}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg bg-white d-flex justify-content-center text-center"
        style={{
          position: "relative",
          top: "-10px",
          left: "13%",
          margin: "0",
        }}
      >
        <div class="container-fluid sticky-top" id="navbarNav">
          <ul class="navbar-nav row gx-5" style={{ width: "100%" }}>
            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle aisles"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  role="button"
                  style={{ fontSize: "15px", fontWeight: "600" }}
                >
                  Aisles
                </a>
                <ul class="dropdown-menu" style={{ zIndex: 1000 }}>
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <Link
                class="nav-link active "
                style={{ cursor: "pointer" }}
                to="/flyer"
              >
                Flyers
              </Link>
            </li>
            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <a class="nav-link active " style={{ cursor: "pointer" }}>
                About Us
              </a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link active " style={{ cursor: "pointer" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
