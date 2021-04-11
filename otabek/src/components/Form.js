import React from "react";

export default function Form({ onSubmit, query, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="query" className="label">
        <h3>Movie Name</h3>
      </label>
      <input
        id="query"
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Harry Potter"
        value={query}
        onChange={handleChange}
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
