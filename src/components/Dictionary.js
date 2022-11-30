import { useState, useEffect } from "react";
import Search from "./Search";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("hello");
  const [data, setData] = useState("");
  const [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setData(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.results);
  }

  useEffect(() => {
    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const photoUrlKey = "n1zEL9Tsb3NjDP0LPWtXzwIofF_4_5rIS6NcpsJRBvI";
    const photoUrl = `https://api.unsplash.com/search/photos?page=1?&query=${word}&client_id=${photoUrlKey}`;

    axios.get(dictionaryUrl).then(handleDictionaryResponse);
    axios.get(photoUrl).then(handlePhotoResponse);
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
            {photos ? <Photos photos={photos} /> : ""}
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
