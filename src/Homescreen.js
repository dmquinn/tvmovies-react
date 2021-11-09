import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import Search from "./Search";

const Homescreen = ({ movies, banner, search, setSearch }) => {
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="h-40" />
      <Banner banner={banner} />
      <Nav />
      <MoviesList movies={movies} />
    </>
  );
};

export default Homescreen;
