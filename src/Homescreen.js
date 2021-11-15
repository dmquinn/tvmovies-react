import React, { useEffect } from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import Search from "./Search";
import Trailer from "./Trailer";
import Mode from "./Mode";

const Homescreen = ({
  movies,
  banner,
  search,
  setSearch,
  setGenre,
  mode,
  setMode,
  setTitle,
  showModal,
  setShowModal,
  title,
}) => {
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Mode setMode={setMode} mode={mode} />
      <div className="h-40" />
      {!search && (
        <Banner
          banner={banner}
          showModal={showModal}
          setShowModal={setShowModal}
          setTitle={setTitle}
          mode={mode}
          title={title}
        />
      )}
      <Nav setGenre={setGenre} search={search} />
      <MoviesList
        movies={movies}
        setTitle={setTitle}
        showModal={showModal}
        setShowModal={setShowModal}
        mode={mode}
      />
      <Trailer
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
      />
    </>
  );
};

export default Homescreen;
