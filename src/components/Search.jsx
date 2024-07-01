import { useEffect, useState } from "react";
import styles from './search.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b18c99b010464df7b16665e99ec74187";

function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
