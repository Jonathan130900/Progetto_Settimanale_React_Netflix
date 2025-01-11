/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const Gallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle the loader

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
    setLoading(true); // Show loader on query change

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
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => {
        // Simulate a minimum loader display time
        setTimeout(() => setLoading(false), 1000); // Ensure at least 1 second of loader
      });
  }, [query, type]);

  return (
    <div>
      <h4>{title}</h4>

      {loading ? ( // Show loader while data is being fetched
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* Large screens */}
          <div className="d-none d-lg-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-4">
            {movies.slice(0, 6).map((movie) => (
              <div key={movie.imdbID} className="col mb-2 text-center px-1">
                <img
                  className="img-fluid rectangular-img"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </div>
            ))}
          </div>

          {/* Medium screens */}
          {movies.length > 0 && (
            <div className="d-none d-md-flex d-lg-none">
              <Carousel interval={null} indicators={false} controls={true} wrap>
                {Array.from({ length: Math.ceil(movies.length / 3) }).map(
                  (_, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-center">
                        {movies.slice(index * 3, index * 3 + 3).map((movie) => (
                          <div
                            key={movie.imdbID}
                            className="col-4 text-center px-1"
                          >
                            <img
                              className="img-fluid rectangular-img"
                              src={movie.Poster}
                              alt={movie.Title}
                            />
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  )
                )}
              </Carousel>
            </div>
          )}

          {/* Small screens */}
          {movies.length > 0 && (
            <div className="d-block d-md-none">
              <Carousel interval={null} indicators={false} controls={true} wrap>
                {movies.slice(0, 6).map((movie, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-fluid rectangular-img"
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;
