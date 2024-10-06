import styles from "../../pages/MoviesPage/moviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="query"
        defaultValue={searchParams.get("query") || ""}
        placeholder="Search for a movie..."
        className={styles.input}
      />
      <button type="submit" className={styles.search}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
