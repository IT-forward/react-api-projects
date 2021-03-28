import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchMovies from "./SearchMovies";

export const Main = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
