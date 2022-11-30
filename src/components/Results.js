import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results() {
  return (
    <div className="Results">
      <section>
        <h2>Word</h2>
        <Phonetic />
      </section>
      <section>
        <h3>Noun</h3>
        <p>meaning</p>
      </section>
    </div>
  );
}
