import React from "react";

export default function MovieCard({ img, title, date, rating, desc }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${img}`}
        alt={title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p>
          <small>RELEASE DATE: {date}</small>
        </p>
        <p>
          <small>RATING: {rating}</small>
        </p>
        <p className="card--desc">{desc}</p>
      </div>
    </div>
  );
}
