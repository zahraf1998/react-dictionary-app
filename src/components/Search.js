export default function Search() {
  return (
    <div className="Search mt-5">
      <form className="d-flex">
        <input
          type="search"
          className="form-control"
          placeholder="Search ..."
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
