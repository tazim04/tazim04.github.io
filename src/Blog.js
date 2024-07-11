import healthy from "./assets/healthy.jpg";
import protien from "./assets/protien.webp";
import veggies from "./assets/veggies.jpg";
import diabetes from "./assets/diabetes.webp";

const Blog = () => {
  return (
    <div class="mx-auto" style={{ width: "80%" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>Blog</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingRight: "20px" }}>
          <div class="card" style={{ width: "18rem", height: "24.5em" }}>
            <img
              src={healthy}
              class="card-img-top"
              alt="article1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">Healthy Eating</h5>
              <p classclassName="card-text">
                Check out this article on healthy eating!
              </p>
              <a
                href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.html"
                class="btn btn-warning"
                target="_blank"
              >
                Open article
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginRight: "10px" }}>
          <div class="card" style={{ width: "18rem", height: "24.5em" }}>
            <img
              src={protien}
              class="card-img-top"
              alt="article1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">10 high protein foods</h5>
              <p classclassName="card-text">
                Check out this article on the best sources of protien!
              </p>
              <a
                href="https://www.bbcgoodfood.com/howto/guide/best-sources-protein"
                class="btn btn-warning"
                target="_blank"
              >
                Open article
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "10px" }}>
          <div class="card" style={{ width: "18rem", height: "24.5em" }}>
            <img
              src={veggies}
              class="card-img-top"
              alt="article1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">Top 20 vegetables</h5>
              <p classclassName="card-text">
                Check out this article on the healthiest veggies!
              </p>
              <a
                href="https://www.bbcgoodfood.com/howto/guide/top-20-healthiest-vegetables"
                class="btn btn-warning"
                target="_blank"
              >
                Open article
              </a>
            </div>
          </div>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={diabetes}
              class="card-img-top"
              alt="article1"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">Best and Worst Foods for Diabetes</h5>
              <p classclassName="card-text">
                Check out this article on the best foods for those with
                diabetes!
              </p>
              <a
                href="https://www.webmd.com/diabetes/diabetic-food-list-best-worst-foods"
                class="btn btn-warning"
                target="_blank"
              >
                Open article
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
