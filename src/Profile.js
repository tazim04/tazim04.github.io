import OrderCard from "./OrderCard";

const Profile = ({ orders, setOrders }) => {
  return (
    <div class="mx-auto" style={{ width: "80%", height: "585px" }}>
      <h1 style={{ color: "#358D2D", paddingBottom: "20px" }}>Profile</h1>
      <h3 style={{ paddingBottom: "20px" }}>Order History</h3>

      <ul>
        {orders.map((order) => (
          <div key={order.orderNumber} style={{ paddingBottom: "30px" }}>
            <OrderCard order={order} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
