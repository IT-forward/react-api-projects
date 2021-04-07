import React from "react";
import MovieCard from "./MovieCard";

export default function CardList({ movies }) {
  return (
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
  );
}
