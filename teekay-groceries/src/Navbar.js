import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="index.html"
            style={{
              fontFamily: "verdana",
              color: "#358D2D",
              fontSize: "35px",
            }}
          >
            TeeKay Groceries
          </a>
          <div class="ms-3 me-auto w-50">
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
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="userCorner">
            <div className="signIn">
              <button class="btn">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg bg-white ">
        <div
          class="container-fluid d-flex justify-content-center text-center"
          id="navbarNav"
        >
          <ul class="navbar-nav row gx-5" style={{ width: "100%" }}>
            <li class="nav-item col-md-2" style={{ marginRight: "20px" }}>
              <a class="nav-link active fs-5" aria-current="page" href="">
                Aisles
              </a>
            </li>
            <li class="nav-item col-md-2" style={{ marginRight: "20px" }}>
              <a class="nav-link active fs-5" style={{ cursor: "pointer" }}>
                Flyers
              </a>
            </li>
            <li class="nav-item col-md-2" style={{ marginRight: "20px" }}>
              <a
                class="nav-link active fs-5"
                style={{ cursor: "pointer" }}
                onClick="document.getElementById('services').scrollIntoView();"
              >
                Recipes
              </a>
            </li>
            <li class="nav-item col-md-2" style={{ marginRight: "20px" }}>
              <a class="nav-link active fs-5" style={{ cursor: "pointer" }}>
                About Us
              </a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link active fs-5" style={{ cursor: "pointer" }}>
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
