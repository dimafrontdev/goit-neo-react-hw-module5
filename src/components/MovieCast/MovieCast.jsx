import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/api.js";
import { useParams } from "react-router-dom";
import styles from "./movieCast.module.css";
import actorPlaceholder from "../../assets/actorPlaceholder.jpg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCredits(movieId).then((response) => {
      setCast(response.data.cast.splice(0, 20));
    });
  }, [movieId]);

  return (
    <ul className={styles.cast}>
      {cast.length > 0 &&
        cast.map((actor) => (
          <li key={actor.id} className={styles.actor}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : actorPlaceholder
              }
              alt={actor.name}
              className={styles.image}
            />
            <p className={styles.actorName}>{actor.name}</p>
            <p className={styles.characterName}>{actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
