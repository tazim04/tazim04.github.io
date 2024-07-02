import homeApple from "./assets/homeApple.png";

const Carousel = () => {
  return (
    <div
      id="carousel"
      class="carousel slide mx-auto"
      style={{ width: "100%", zIndex: 0 }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="parent d-flex justify-content-center">
            <img src={homeApple} class="d-block w-100" alt="..." />
          </div>
        </div>
        <div class="carousel-item">
          <div class="parent d-flex justify-content-center">
            <img src={homeApple} class="d-block w-100" alt="..." />
          </div>
        </div>
        <div class="carousel-item">
          <div class="parent d-flex justify-content-center">
            <img src={homeApple} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
