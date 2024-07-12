import "./styles/Navbar.css";
import translations from "./lang/translations";
import profile from "./assets/profile.png";
import cart from "./assets/shopping-cart-icon.png";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({
  cartNumber,
  setcartNumber,
  show,
  setShow,
  lang,
  setLang,
}) => {
  const [search, setSearch] = useState("");

  const t = translations[lang]; // get translations for selected language

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

  const handleProfileClick = () => {
    console.log("Profile clicked!");

    history.push("/profile"); // redirect to profile page
  };

  const handleLanguageChange = (language) => {
    console.log("Language changed to " + language);
    setLang(language); // update language state
  };

  return (
    <div style={{ padding: "0px" }}>
      <nav
        class="navbar navbar-expand-lg"
        style={{ paddingBottom: "10px", zIndex: 1000 }}
      >
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
                placeholder={t.nav.searchProducts}
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
              <button class="btn btn-outline-success" type="submit">
                {t.nav.search}
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
                class="profile"
                src={profile}
                style={{ width: "50px", height: "auto", margin: "0" }}
                alt="profile"
                onClick={handleProfileClick}
              />
              <div
                class="language"
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0",
                  width: "50px",
                }}
              >
                <div class="lang">
                  <button
                    class="btn"
                    type="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    {lang}
                  </button>
                  <ul
                    class="dropdown-menu language-dropdown-menu"
                    aria-labelledby="languageDropdown"
                  >
                    <li>
                      <button
                        class="dropdown-item language-dropdown-item"
                        onClick={() => handleLanguageChange("EN")}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item language-dropdown-item"
                        onClick={() => handleLanguageChange("FR")}
                      >
                        French
                      </button>
                    </li>
                  </ul>
                </div>
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
          left: "4%",
          margin: "0",
        }}
      >
        <div class="container-fluid " id="navbarNav">
          <ul class="navbar-nav row gx-5" style={{ width: "100%" }}>
            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <Link
                to="/blog"
                class="nav-link active "
                style={{ cursor: "pointer" }}
              >
                {t.nav.blog}
              </Link>
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
                {t.nav.flyer}
              </Link>
            </li>
            <li
              class="nav-item col-md-2"
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <Link
                to="/about"
                class="nav-link active "
                style={{ cursor: "pointer" }}
              >
                {t.nav.about}
              </Link>
            </li>
            <li class="nav-item col-md-2">
              <Link
                to="/contact"
                class="nav-link active "
                style={{ cursor: "pointer" }}
              >
                {t.nav.contact}
              </Link>
            </li>
            <li class="nav-item col-md-2">
              <Link
                to="/faq"
                class="nav-link active "
                style={{ cursor: "pointer" }}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
