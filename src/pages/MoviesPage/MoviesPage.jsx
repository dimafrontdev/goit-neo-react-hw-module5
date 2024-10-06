import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // Import the hook
import { searchMovies } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import styles from "./moviesPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      searchMovies(query).then((response) => {
        setMovies(response.data.results);
      });
    }
  }, [searchParams]);

  return (
    <div className="wrapper">
      <h1 className={styles.title}>Search Movies</h1>
      <SearchForm />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
