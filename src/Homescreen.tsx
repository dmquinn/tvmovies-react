import React, { Dispatch, SetStateAction } from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import Search from "./Search";
import Trailer from "./Trailer";
import Mode from "./Mode";
import { BannerType } from "./types";

interface Props {
  movies: object[] | null,
  banner: BannerType | null,
  search:  string,
   setSearch: Dispatch<SetStateAction<string>>,
  setGenre: Dispatch<SetStateAction<string>>,
    setMode: Dispatch<SetStateAction<string>>,
      setTitle: Dispatch<SetStateAction<string>>,
        setShowModal: Dispatch<SetStateAction<boolean>>,
        showModal: boolean,
        mode: string,
        title: string,
        genre?: string,

}

const Homescreen:React.FC<Props> = ({
  movies,
  banner ,
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
      <Search setSearch={setSearch} />
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
