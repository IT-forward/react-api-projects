import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

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
      <h1 className="title">React Movie Search</h1>
      <Form onSubmit={searchMovies} query={query} onChange={setQuery} />
      <CardList movies={movies} />
    </>
  );
}
