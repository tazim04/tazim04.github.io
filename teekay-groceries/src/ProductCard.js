import apple from "./assets/apple.png";
import add_to_cart from "./assets/add_to_cart.png";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div class="card" style={{ width: "85%" }}>
        <img
          src={apple}
          class="card-img-top mx-auto"
          alt="Apples"
          style={{
            width: "8em",
            height: "auto",
          }}
        />
        <div
          class="card-body d-flex flex-column justify-content-between"
          style={{ height: "200px" }}
        >
          <h5 class="card-title">Apple</h5>
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            Sold Individually
          </h6>

          <h5 class="card-title" style={{ fontSize: "20px" }}>
            $2.99 avg. ea.
          </h5>
          <h6
            class="card-subtitle mb-2 text-body-secondary"
            style={{ fontSize: "13px", paddingBottom: "10px" }}
          >
            (170g avg.)
            <br />
            $5.60/kg
          </h6>

          <div
            class="btn addToCart"
            style={{
              background: "darkgrey",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              left: "75%",
              bottom: "8%",
            }}
          >
            <img src={add_to_cart} alt="" style={{ width: "2em" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
