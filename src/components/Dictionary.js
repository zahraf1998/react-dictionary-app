import Search from "./Search";
import Results from "./Results";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <div className="container">
        <header>
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main className="d-flex justify-content-center">
          <Search />
          <Results />
        </main>
        <footer className="text-center">
          <small className="text-muted">
            Coded by Zahra F. Source code on{" "}
            <a
              href="https://github.com/zahraf1998/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
