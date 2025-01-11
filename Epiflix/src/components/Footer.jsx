import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#221f1f", color: "#838383" }}>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col col-6">
            <div className="row">
              <div className="col mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <div className="col mb-2">
                <p>
                  <a href="#">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#">Media Center</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Contact us</a>
                </p>
              </div>
              <div className="col mb-2">
                <p>
                  <a href="#">Audio Description</a>
                </p>
                <p>
                  <a href="#">Investor Relations</a>
                </p>
                <p>
                  <a href="#">Legal Notices</a>
                </p>
              </div>
              <div className="col mb-2">
                <p>
                  <a href="#">Help Center</a>
                </p>
                <p>
                  <a href="#">Jobs</a>
                </p>
                <p>
                  <a href="#">Cookie Preferences</a>
                </p>
              </div>
              <div className="col mb-2">
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
                <p>
                  <a href="#">Corporate Information</a>
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-sm footer-button rounded-0 mt-3"
                >
                  Service Code
                </button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-auto">
                <p className="copyright">© 1997-2023 Netflix, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
