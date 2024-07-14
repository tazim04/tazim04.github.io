import { Link, useHistory } from "react-router-dom";

const Confirmation = ({ cartNumber, orders }) => {
  const order = orders[orders.length - 1]; // get latest order
  console.log(order);

  const history = useHistory(); // used to redirect to home page

  const summary = () => {
    if (order.orderType === "shipping") {
      return (
        <div>
          <h5>Summary:</h5>
          <h6>Order #: {order.orderNumber}</h6>
          <h6>Order Date: {order.date}</h6>
          <h6>Order Total: ${order.totalWithTax}</h6>
        </div>
      );
    } else {
      return (
        <div>
          <h5>Summary:</h5>
          <h6>Order #: {order.orderNumber}</h6>
          <h6>Order Date: {order.date}</h6>
          <h6>Pick-Up Date: {order.form.pickUpDate}</h6>
          <h6>Pick-Up Time: {order.form.pickUpTime}</h6>
          <h6>Order Total: ${order.totalWithTax}</h6>
        </div>
      );
    }
  };

  const location = () => {
    console.log("orderType: " + order.orderType);
    if (order.orderType === "shipping") {
      return (
        <div>
          <h5>Shipping Address:</h5>
          <h6>{order.form.streetAddress}</h6>
          <h6>{order.form.city}</h6>
          <h6>{order.form.province}</h6>
          <h6>{order.form.postalCode}</h6>
        </div>
      );
    } else {
      return (
        <div>
          <h5>Pick-Up Location:</h5>
          <h6>{order.form.location}</h6>
          <h6></h6>
        </div>
      );
    }
  };

  return (
    <div class="mx-auto" style={{ width: "90%" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Thanks for shopping with us!
      </h1>
      <div style={{ paddingBottom: "40px" }}>
        <div
          style={{ display: "inilne-block", borderBottom: "black solid 1px" }}
        >
          <h2>My Order:</h2>
          <p
            style={{
              margin: "0",
              position: "absolute",
              right: "100px",
              top: "250px",
            }}
          >
            Order #:{order.orderNumber}
          </p>
        </div>
      </div>
      <div
        class="mx-auto"
        style={{
          background: "#E9E9E9",
          height: "230px",
          width: "900px",
        }}
      >
        <div class="row" style={{ padding: "30px 30px 30px 150px" }}>
          <div class="col" style={{ paddingRight: "100px" }}>
            {summary()}
          </div>
          <div class="col">{location()}</div>
        </div>
      </div>

      <div style={{ paddingTop: "20px" }}>
        <table class="mx-auto" style={{ margin: "0 auto", width: "90%" }}>
          <thead>
            <tr>
              <th style={{ fontSize: "20px", paddingBottom: "20px" }}>Items</th>
              <th style={{ fontSize: "20px", paddingBottom: "20px" }}>Qty</th>
              <th style={{ fontSize: "20px", paddingBottom: "20px" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.cart.map((item, index) => (
              <tr
                key={index}
                style={{ borderBottom: "solid black 1px", height: "130px" }}
              >
                <td style={{ paddingBottom: "20px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: "90px", maxHeight: "90px" }}
                  />
                  <span style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    {item.name}
                  </span>
                </td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingTop: "20px",
        }}
      >
        <h5 style={{ paddingTop: "20px" }}>
          Subtotal: ${order.totalBeforeTax}
        </h5>
        <h5 style={{}}>Estimated Tax: ${order.tax}</h5>
        <h3 style={{}}>Order Total: ${order.totalWithTax}</h3>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            background: "#75DA6D",
            border: "none",
            height: "70px",
            width: "260px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#5CBF4D")} // change color on hover
          onMouseLeave={(e) => (e.target.style.background = "#75DA6D")} // change back to original color
          onClick={() => history.push("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
