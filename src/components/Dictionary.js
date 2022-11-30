import Search from "./Search";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <div className="container">
        <header>
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <div className="w-100">
            <Search />
            <Results />
          </div>
        </main>
        <footer className="text-center mt-5">
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
