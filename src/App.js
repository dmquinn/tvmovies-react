import Homescreen from "./Homescreen";
import { useEffect, useState } from "react";
function App() {
  const API_URL_MOVIES =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&with_genres=26";
  const API_URL_TV =
    "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  let data;
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState(null);
  const random = Math.floor(Math.random() * Math.floor(20));

  useEffect(() => {
    async function getMovies(url) {
      const res = await fetch(url);
      data = await res.json();
      console.log("MMM", data);
      setMovies(data.results);
      console.log(data.results);
      setBanner(data.results[random]);
    }
    getMovies(API_URL_MOVIES);
  }, []);

  return (
    <>
      <Homescreen movies={movies} banner={banner} />
    </>
  );
}

export default App;
