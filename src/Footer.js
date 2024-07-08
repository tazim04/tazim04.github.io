import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#75DA6D", position: "relative", top: "500px" }}
      id="footer"
    >
      <footer
        class="row py-5 my-5"
        style={{ width: "80%", margin: "auto", fontWeight: "bold" }}
      >
        <div class="col mb-3">
          <h5 class="text-black">Contact Us</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "110%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <li class="nav-item mb-2 text-black">
              123 Dental Road, Ottawa, ON
            </li>
            <li class="nav-item mb-2 text-black">111-111-1111</li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="text-black">Our Hours</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "110%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <div class="row text-black" style={{ width: "70%" }}>
              <div class="col">
                <li class="nav-item mb-2">Monday</li>
                <li class="nav-item mb-2">Tuesday</li>
                <li class="nav-item mb-2">Wednesday</li>
                <li class="nav-item mb-2">Thursday</li>
                <li class="nav-item mb-2">Friday</li>
                <li class="nav-item mb-2">Saturday</li>
                <li class="nav-item mb-2">Sunday</li>
              </div>
              <div class="col">
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-8pm</li>
              </div>
            </div>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="text-black">Quick Links</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "100%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <li class="nav-item mb-2 ">
              <Link
                to="/"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                Home
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                Aisles
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/about"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                About Us
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/contact"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
