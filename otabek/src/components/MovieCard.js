import React from "react";

export default function MovieCard(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.img}`}
        alt={props.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{props.title}</h3>
        <p>
          <small>RELEASE DATE: {props.date}</small>
        </p>
        <p>
          <small>RATING: {props.rating}</small>
        </p>
        <p className="card--desc">{props.desc}</p>
      </div>
    </div>
  );
}
