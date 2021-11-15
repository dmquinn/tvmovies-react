import Homescreen from "./Homescreen";
import { useEffect, useState } from "react";
import flashlight from "./flashlight";
import "./flashlight.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState(null);
  const random = Math.floor(Math.random() * Math.floor(20));
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [mode, setMode] = useState("movies");
  const [title, setTitle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const key = process.env.REACT_APP_KEY;

  const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1&with_genres=${genre}`;
  const API_URL_TV = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${key}&page=1`;

  useEffect(() => {
    console.log("key", key);
    async function getMovies(url) {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setBanner(data.results[random]);
    }
    mode === "movies" ? getMovies(API_URL_MOVIES) : getMovies(API_URL_TV);
    !!search && mode === "movies"
      ? getMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&query="` +
            search
        )
      : !!search &&
        mode === "tv" &&
        getMovies(
          `https://api.themoviedb.org/3/search/tv?api_key=${key}&query="` +
            search
        );
  }, [search, genre, mode, key, API_URL_MOVIES, API_URL_TV, random]);

  return (
    <>
      <div
        className="backImage w-screen h-screen"
        style={{
          backgroundImage:
            mode === "tv"
              ? "url(" +
                "https://images.unsplash.com/photo-1563699182-58375278b2b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" +
                ")"
              : "url(" +
                "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" +
                ")",
        }}
      ></div>
      <Homescreen
        setMode={setMode}
        mode={mode}
        genre={genre}
        setGenre={setGenre}
        movies={movies}
        banner={banner}
        search={search}
        setSearch={setSearch}
        setTitle={setTitle}
        title={title}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default App;
