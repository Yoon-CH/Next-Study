import React, { useEffect, useState } from "react";
import HeadName from "../components/HeadName";

const API_KEY = "abcd538ed5842bd98a704483dbcad917";

const index = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <HeadName title="Home" />
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
};

export default index;
