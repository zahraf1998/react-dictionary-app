import { useState, useEffect } from "react";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("Hello");
  const [data, setData] = useState("");

  function handleResponse(response) {
    setData(response.data[0]);
  }

  useEffect(() => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }, [word]);

  return (
    <div className="Dictionary">
      <div className="container">
        <header>
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <div className="w-100">
            <Search setWord={setWord} />
            {data ? <Results data={data} /> : ""}
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
