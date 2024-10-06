import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
  NavLink,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import styles from "./movieDetailsPage.module.css";
import posterPlaceholder from "../../assets/posterPlaceholder.jpg";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(
    location.state
      ? location.state?.from?.pathname + location.state?.from?.search
      : "/movies",
  );

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="wrapper">
      <button
        onClick={() => navigate(backLink.current)}
        className={styles.back}
      >
        Go back
      </button>

      <div className={styles.movieWrapper}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : posterPlaceholder
          }
          alt={movie.title}
          className={styles.image}
        />

        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.description}>{movie.overview}</p>

          {movie.genres?.length > 0 && (
            <ul className={styles.list}>
              {movie.genres?.map((el) => (
                <li key={el.id} className={styles.listItem}>
                  {el.name}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.stats}>
            <p>
              Rating: <span>{movie.vote_average.toFixed(2)}</span>
            </p>
            <p>
              Popularity: <span>{movie.popularity.toFixed(2)}%</span>
            </p>
            <p>
              Duration: <span>{movie.runtime}m</span>
            </p>
          </div>

          <div className={styles.production}>
            <p>Made by: </p>
            <ul className={styles.list}>
              {movie.production_companies?.map((el) => (
                <li key={el.id} className={styles.listItem}>
                  {el.name}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.production}>
            <p>Filmed in: </p>
            <ul className={styles.list}>
              {movie.production_countries?.map((el) => (
                <li key={el.iso_3166_1} className={styles.listItem}>
                  {el.iso_3166_1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <nav className={styles.subLinks}>
        <NavLink
          to="cast"
          className={({ isActive }) =>
            clsx(isActive && styles.active, styles.subLink)
          }
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            clsx(isActive && styles.active, styles.subLink)
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
