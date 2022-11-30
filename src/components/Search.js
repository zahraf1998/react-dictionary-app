import "./Search.css";

export default function Search() {
  return (
    <div className="Search w-100">
      <form className="d-flex">
        <input
          type="search"
          className="form-control"
          placeholder="Search ..."
        ></input>
        <input type="submit" value="Search" className="btn btn-light"></input>
      </form>
    </div>
  );
}
