import React from "react";

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label htmlFor="query" className="label">
        <h3>Movie Name</h3>
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Harry Potter"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
