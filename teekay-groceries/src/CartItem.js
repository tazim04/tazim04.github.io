import "./styles//CartItem.css";

const CartItem = ({ name, price, image }) => {
  return (
    <div
      class="card border-0 row cart container-fluid"
      style={{ width: "980px" }}
    >
      <div class="card-body d-flex align-items-center">
        <img
          src={image}
          class="card-img-top col"
          alt={name}
          style={{ maxWidth: "8em", minHeight: "8em", marginRight: "30px" }}
        />
        <div class="card-title col">
          <h5>{name}</h5>
          <p style={{ color: "#4EAA46", fontWeight: "bold" }}>In Stock</p>
        </div>
        <div style={{ position: "relative", right: "30px" }}>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
