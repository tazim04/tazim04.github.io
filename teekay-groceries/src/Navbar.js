import "./Navbar.css";
import profile from "./assets/profile.png";
import cart from "./assets/shopping-cart-icon.png";
import React, { useState } from "react";

const Navbar = () => {
  const [cartNumber, setcartNumber] = useState(0);

  return (
    <div style={{ padding: "0px" }}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" style={{ padding: "0px" }}>
          <a
            class="navbar-brand"
            href="index.html"
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
          </a>
          <div
            class="ps-5 me-auto pe-5"
            style={{
              position: "relative",
              top: "-11.5px",
              width: "75%",
            }}
          >
            <form class="d-flex " role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
              width: "290px",
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
                className="signIn"
                style={{ display: "flex", alignItems: "center", margin: "0" }}
              >
                <button class="btn">Sign In</button>
              </div>

              <div className="cart">
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "50px",
                    marginLeft: "25px",
                    paddingTop: "6px",
                    paddingRight: "10px",
                  }}
                />
              </div>
              <div
                className="cartNumber"
                style={{ paddingRight: "10px", fontWeight: "bold" }}
              >
                {cartNumber}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg bg-white"
        style={{
          position: "relative",
          top: "-10px",
          margin: "0",
        }}
      >
        <div
          class="container-fluid d-flex justify-content-center text-center"
          id="navbarNav"
        >
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
                <ul class="dropdown-menu">
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
              <a class="nav-link active " style={{ cursor: "pointer" }}>
                Flyers
              </a>
            </li>
            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <a
                class="nav-link active "
                style={{ cursor: "pointer" }}
                onClick="document.getElementById('services').scrollIntoView();"
              >
                Recipes
              </a>
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
