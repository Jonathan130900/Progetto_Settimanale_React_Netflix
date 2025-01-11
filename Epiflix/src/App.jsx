import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container-fluid px-4">
          <Gallery title="Trending Now" query="Harry Potter" />
          <Gallery title="Watch it Again" query="Lord of the Rings" />
          <Gallery title="New Releases" query="Marvel" />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
