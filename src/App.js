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
  const [torch, setTorch] = useState(false);

  const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&with_genres=${genre}`;
  const API_URL_TV =
    "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  let data;

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   // torch ? (script.src = flashlight) : (script.src = null);
  //   script.async = true;
  //   // torch === true && document.body.appendChild(script);
  // }, [torch]);

  useEffect(() => {
    async function getMovies(url) {
      const res = await fetch(url);
      data = await res.json();
      setMovies(data.results);
      console.log(movies);
      setBanner(data.results[random]);
    }
    getMovies(API_URL_MOVIES);
    !!search &&
      getMovies(
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="' +
          search
      );
  }, [search, genre]);

  return (
    <>
      <div className="backImage w-screen h-screen"></div>
      <Homescreen
        setTorch={setTorch}
        torch={torch}
        genre={genre}
        setGenre={setGenre}
        movies={movies}
        banner={banner}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
