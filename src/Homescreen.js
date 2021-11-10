import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import Search from "./Search";

const Homescreen = ({
  movies,
  banner,
  search,
  setSearch,
  setGenre,
  setTorch,
  torch,
}) => {
  const handleClick = () => {
    torch ? setTorch(false) : setTorch(true);
  };

  return (
    <>
      <i
        className={
          torch
            ? "far fa-lightbulb fa-2x absolute right-10 text-white"
            : "far fa-lightbulb fa-2x absolute right-10 text-gray-500"
        }
        onClick={handleClick}
      ></i>
      <Search search={search} setSearch={setSearch} />
      <div className="h-40" />
      {!search && <Banner banner={banner} />}
      <Nav setGenre={setGenre} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Homescreen;
