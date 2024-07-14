import aboutImg from "./assets/aboutImg.jpg";

const About = () => {
  return (
    <div>
      <div class="card mb-3 mt-3 mb-5 mx-auto" style={{ border: "none" }}>
        <div class="row g-0  d-flex align-items-center">
          <div class="col-md-3">
            <div class="card-body ms-5 mt-4">
              <h1 class="card-title mb-4">About Us</h1>
              <p
                class="card-text mb-5"
                style={{ fontSize: "20px", width: "170%" }}
              >
                TeeKay Groceries is dedicated to providing exceptional grocery
                shopping experience to our customers. With a commitment to
                excellence, our team of staff strive to deliver the best service
                tailored to meet the needs of each individual. We offer a wide
                range of products including fresh produce, pantry staples, and
                household items. Our goal is to provide high-quality products at
                affordable prices, making grocery shopping convenient and
                enjoyable. Whether you're looking for everyday essentials or
                specialty items, TeeKay Groceries is here to serve you with
                integrity and professionalism. Welcome to TeeKay Groceries,
                where your grocery needs are our priority. We also offer
                delivery services to bring your groceries right to your
                doorstep.
              </p>
            </div>
          </div>
          <div class="col-md-8">
            <img
              src={aboutImg}
              class="img-fluid rounded-start float-end mb-5"
              style={{ width: "75%" }}
              alt="store"
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

export default About;
