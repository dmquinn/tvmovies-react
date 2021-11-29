import React, { Dispatch, SetStateAction } from "react";
import Rating from "./Rating";
import {MovieType} from "./types"
interface Props {
  movies: MovieType,
        setTitle: Dispatch<SetStateAction<string>>,
                setShowModal: Dispatch<SetStateAction<boolean>>,


}
const MoviesList = ({ movies, setTitle, setShowModal, mode }) => {
  return (
    <div className="px-20 grid md:grid-cols-4 gap-6">
      {movies.map((movie, i) => {
        return (
          <div className="card group" key={i}>
            <img
              src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              className="object-cover mb-5"
              alt=""
            />
            <Rating value={movie.vote_average} />
            <h5 className="text-gray-200 py-5">{movie.title || movie.name}</h5>
            <button
              className={
                mode === "movies"
                  ? "opacity-0 group-hover:opacity-100 bg-red-500 rounded-lg w-40 absolute -mt-40 ml-36 text-white py-2 transition duration-200"
                  : "opacity-0 group-hover:opacity-100 bg-green-500 rounded-lg w-40 absolute -mt-40 ml-36 text-white py-2 transition duration-200"
              }
              onClick={() => {
                setShowModal(true);
                setTitle(movie.title || movie.name);
              }}
            >
              <i className="far fa-play-circle fa-lg text-white px-2"></i>
              Watch Trailer
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
