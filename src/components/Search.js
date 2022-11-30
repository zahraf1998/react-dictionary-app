import { useState } from "react";

export default function Search({ setWord }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value.trim().toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWord(value);
    alert(value);
  }
  return (
    <div className="Search mt-5">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Search ..."
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-light ms-1"
        ></input>
      </form>
    </div>
  );
}
