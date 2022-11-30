import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results() {
  return (
    <div className="Results">
      <section>
        <h2>Word</h2>
        <Phonetic />
      </section>
      <section>
        <Meaning />
      </section>
    </div>
  );
}
