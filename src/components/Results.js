import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results({ data }) {
  return (
    <div className="Results">
      <section>
        <h2 className="text-capitalize">{data.word}</h2>
        {data.phonetics.map((phonetic, i) => {
          return (
            <div key={i}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
      </section>
      {data.meanings.map(function (meaning, i) {
        return (
          <section key={i}>
            <Meaning meaning={meaning} />
          </section>
        );
      })}
    </div>
  );
}
