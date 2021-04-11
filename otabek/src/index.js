import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchMovies from "./components/SearchMovies";

export const Main = () => {
  return (
    <div className="container">
      <SearchMovies />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
