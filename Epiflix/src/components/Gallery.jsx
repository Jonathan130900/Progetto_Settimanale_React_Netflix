import React, { useState, useEffect } from "react";

const Gallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=a4315e67`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search || []))
      .catch((error) => console.error(error));
  }, [query]);

  return (
    <div>
      <h4>{title}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col mb-2 text-center px-1">
            <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
