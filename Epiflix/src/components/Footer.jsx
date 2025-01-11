import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#221f1f", color: "#838383" }}>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <i className="bi bi-facebook footer-icon me-3"></i>
            <i className="bi bi-instagram footer-icon me-3"></i>
            <i className="bi bi-twitter footer-icon me-3"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-3 col-sm-6">
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Contact us
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Audio Description
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Legal Notices
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Cookie Preferences
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-links">
              <p>
                <a href="#" alt="footer link">
                  Gift Cards
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#" alt="footer link">
                  Corporate Information
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0"
            >
              Service Code
            </button>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-auto">
            <p className="copyright">© 1997-2023 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
