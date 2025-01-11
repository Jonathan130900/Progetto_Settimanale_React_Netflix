import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid px-4">
        <Gallery title="Trending Now" query="Harry Potter" />
        <Gallery title="Watch it Again" query="Lord of the Rings" />
        <Gallery title="New Releases" query="Marvel" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
