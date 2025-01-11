import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="d-flex justify-content-between align-items-center ms-4 me-4 mt-4">
          <div className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>
            <div className="dropdown ms-4">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <i className="bi bi-grid icons me-2"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <div className="container-fluid px-4">
          <div className="mb-4">
            {" "}
            <Gallery title="Trending Now" query="Harry Potter" />
          </div>
          <div className="mb-4">
            <Gallery title="Watch it Again" query="Lord of the Rings" />
          </div>
          <div className="mb-4">
            <Gallery title="New Releases" query="Marvel" />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
