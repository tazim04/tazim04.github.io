import homeApple from "./assets/homeApple.png";
import flyerCarousel from "./assets/flyer_carousel.webp";
import "./styles/Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      id="carousel"
      class="carousel slide mx-auto"
      style={{ width: "100%", zIndex: 0 }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="parent"
            style={{
              background: "orange",
              display: "flex",
              height: "500px",
            }}
          >
            <h2
              style={{
                padding: "100px 0 0 150px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Check out our flyer!
            </h2>
            <img
              src={flyerCarousel}
              class="d-block"
              alt="flyers"
              style={{
                position: "relative",
                right: "-10%",
              }}
            />

            <Link
              class="btn"
              style={{
                color: "white",
                position: "absolute",
                left: "145px",
                bottom: "200px",
                width: "300px",
                height: "50px",
                background: "#358D2D",
                fontSize: "20px",
              }}
              to="/flyer"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="parent" style={{ background: "orange", height: "500px" }}>
            <h2
              style={{
                fontFamily: "sans-serif",
                position: "absolute",
                fontWeight: "bold",
                right: "10%",
                top: "20%",
              }}
            >
              Have questions? Contact us!
            </h2>
            <Link
              class="btn"
              style={{
                color: "white",
                position: "absolute",
                right: "285px",
                bottom: "200px",
                width: "300px",
                height: "50px",
                background: "#358D2D",
                fontSize: "20px",
              }}
              to="/contact"
            >
              Contact Us
            </Link>
            <img
              src={homeApple}
              class="d-block"
              alt="best prices"
              style={{ width: "780px" }}
            />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
        style={{ position: "absolute", left: "-50px" }}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
        style={{ position: "absolute", right: "-50px" }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
