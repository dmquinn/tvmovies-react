import React from "react";
import Rating from "./Rating";

const MoviesList = ({ movies }) => {
  return (
    <div className="px-20 grid grid-cols-4 gap-6">
      {movies.map((movie, i) => {
        return (
          <div className="card">
            <img
              src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              className="object-cover mb-5"
              alt=""
            />
            <Rating value={movie.vote_average} />
            <h5 className="text-gray-200 py-5">{movie.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
