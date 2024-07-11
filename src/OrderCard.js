const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <div class="card mx-auto" style={{ width: "100%" }}>
      <div class="card-header">
        <h7>
          <strong>Order Date:</strong> {order.date}
        </h7>
        <h7 style={{ float: "right" }}>
          <strong>Order #: </strong>
          {order.orderNumber}
        </h7>
      </div>
      <div class="card-body">
        {order.cart.map((item) => (
          <div class="row" style={{ borderBottom: "solid grey 0.5px" }}>
            <img
              src={item.image}
              class="card-img-top col"
              alt={item.name}
              style={{
                maxWidth: "6.7em",
                minHeight: "6em",
                marginRight: "30px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
            />
            <div class="col" style={{ paddingTop: "20px" }}>
              <h5 class="card-title ">{item.name}</h5>

              <p class="card-text" style={{ fontSize: "14px" }}>
                <strong>Qty:</strong> {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div class="card-footer text-body-secondary">
        <button
          href="#"
          class="btn btn-success"
          style={{
            height: "30px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Order Details
        </button>
        <span style={{ float: "right" }}>
          <strong>Order Total:</strong> ${order.totalWithTax}
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
