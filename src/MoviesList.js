import React from "react";

const MoviesList = ({ movies }) => {
  return (
    <div className="px-20 grid grid-cols-4 gap-6">
      {movies.map((movie, i) => {
        return (
          <img
            src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
            className="object-cover"
            alt=""
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
