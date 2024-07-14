import contactImg from "./assets/contactImg.jpg";

const Contact = () => {
  return (
    <div>
      <div class="card mb-3 mt-3 mb-5 mx-auto" style={{ border: "none" }}>
        <div class="row g-0  d-flex align-items-center">
          <div class="col-md-3">
            <div class="card-body ms-5 mt-4" style={{ width: "110%" }}>
              <h1 class="card-title mb-4">Contact Us</h1>
              <ul>
                <li>
                  <h5>1-800-234-2345</h5>
                </li>
                <li>
                  <h5>contact@teekayGroceries.ca</h5>
                </li>
                <li>
                  <h5>1234 Groceries Street</h5>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <img
              src={contactImg}
              alt=""
              style={{ width: "90%", objectFit: "cover", float: "right" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "2px solid black",
          width: "80%",
          marginBottom: "1rem",
          margin: "auto",
        }}
      ></div>
    </div>
  );
};

export default Contact;
