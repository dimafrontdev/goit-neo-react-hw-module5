import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import styles from "./homePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="wrapper">
      <h1 className={styles.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
