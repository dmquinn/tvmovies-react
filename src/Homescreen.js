import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import Nav from "./Nav";

const Homescreen = ({ movies, banner }) => {
  return (
    <>
      <div className="h-80">HELLO</div>
      <Banner banner={banner} />
      <Nav />
      <MoviesList movies={movies} />
    </>
  );
};

export default Homescreen;
