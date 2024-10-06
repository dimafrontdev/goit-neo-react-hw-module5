import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api.js";
import { useParams } from "react-router-dom";
import styles from "./movieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId).then((response) => {
      setReviews(response.data.results);
    });
  }, [movieId]);

  return (
    <ul className={styles.reviews}>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <li key={review.id} className={styles.review}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieReviews;
