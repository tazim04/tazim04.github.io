import flyer from "./assets/flyer.jpg";

const Flyer = () => {
  return (
    <div className="flyer">
      <h1 class="display-4 fw-bold text-black d-flex justify-content-center mb-5 pt-3">
        Check out our flyer!
      </h1>
      <img src={flyer} alt="flyer" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default Flyer;
