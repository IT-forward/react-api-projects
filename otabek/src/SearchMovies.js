import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies(props) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=e6aea0d7609d8123fae4d5b388808e52&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          <h3>Movie Name</h3>
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Harry Potter"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              img={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              rating={movie.vote_average}
              desc={movie.overview}
            />
          ))}
      </div>
    </>
  );
}
