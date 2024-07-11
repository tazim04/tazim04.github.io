import { Link } from "react-router-dom";
import translations from "./lang/translations";

const Footer = ({ lang }) => {
  const t = translations[lang]; // get translations for selected language

  return (
    <div
      style={{ backgroundColor: "#75DA6D", position: "relative", top: "100px" }}
      id="footer"
    >
      <footer
        class="row py-5 my-5"
        style={{ width: "80%", margin: "auto", fontWeight: "bold" }}
      >
        <div class="col mb-3">
          <h5 class="text-black">{t.footer.contact}</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "110%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <li class="nav-item mb-2 text-black">
              123 Dental Road, Ottawa, ON
            </li>
            <li class="nav-item mb-2 text-black">111-111-1111</li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="text-black">{t.footer.hours}</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "110%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <div class="row text-black" style={{ width: "70%" }}>
              <div class="col">
                <li class="nav-item mb-2">{t.footer.days.monday}</li>
                <li class="nav-item mb-2">{t.footer.days.tuesday}</li>
                <li class="nav-item mb-2">{t.footer.days.wednesday}</li>
                <li class="nav-item mb-2">{t.footer.days.thursday}</li>
                <li class="nav-item mb-2">{t.footer.days.friday}</li>
                <li class="nav-item mb-2">{t.footer.days.saturday}</li>
                <li class="nav-item mb-2">{t.footer.days.sunday}</li>
              </div>
              <div class="col">
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-10pm</li>
                <li class="nav-item mb-2">8am-8pm</li>
              </div>
            </div>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="text-black">{t.footer.links}</h5>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "100%",
              marginBottom: "1rem",
            }}
          ></div>
          <ul class="nav flex-column">
            <li class="nav-item mb-2 ">
              <Link
                to="/"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                {t.footer.home}
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                {t.footer.blog}
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/about"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                {t.footer.about}
              </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
                to="/contact"
                class="nav-link p-0 text-black"
                style={{ marginBottom: "20px" }}
              >
                {t.footer.contact}
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
