import Lee from "../components/Lee";
import { useState, useEffect } from "react";

const API_KEYS = "cf5feb3192bfa94ddb5020cdf200f5fc";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Lee title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
