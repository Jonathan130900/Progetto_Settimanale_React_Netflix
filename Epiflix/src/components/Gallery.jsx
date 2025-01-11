/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const Gallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);

  const determineType = (query) => {
    if (
      query.toLowerCase().includes("series") ||
      query.toLowerCase().includes("tv")
    ) {
      return "series";
    }
    return "movie";
  };

  const type = determineType(query);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&type=${type}&apikey=a4315e67`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search || []);
        } else {
          console.error("Error fetching data:", data.Error);
          setMovies([]);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [query, type]);

  return (
    <div>
      <h4>{title}</h4>

      {movies.length > 0 && (
        <Carousel interval={null} indicators={false} controls={true}>
          <Carousel.Item>
            <div className="d-flex">
              {movies.slice(0, 6).map((movie) => (
                <div
                  key={movie.imdbID}
                  className="carousel-item-img col-6 col-md-4 col-lg-2 text-center px-1"
                >
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default Gallery;
