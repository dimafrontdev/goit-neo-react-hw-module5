import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQyMTdmZTkyY2JmMTRhMDJjNjc0ZjFhYWQyMjhmNSIsIm5iZiI6MTcyODE0NTY3Mi42MjYwNDcsInN1YiI6IjY3MDE2ODFiOWViZWExOTAwNmY4NjgyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vUPSB0d3iIm3-d6hLYRdw1hz0jLmmCmG5y6A8Zpxxc";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Fetch trending movies
export const fetchTrendingMovies = () => {
  return axiosInstance.get("/trending/movie/day");
};

// Search movies by keyword
export const searchMovies = (query) => {
  return axiosInstance.get(`/search/movie?query=${query}&include_adult=false`);
};

// Get movie details by ID
export const fetchMovieDetails = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}`);
};

// Get movie credits (cast)
export const fetchMovieCredits = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/credits`);
};

// Get movie reviews
export const fetchMovieReviews = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/reviews`);
};
