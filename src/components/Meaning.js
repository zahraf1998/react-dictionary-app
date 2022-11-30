export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize">{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, i) {
        return (
          <div className="mb-3" align="justify" key={i}>
            <div>{definition.definition}</div>
            <div className="text-muted fst-italic">{definition.example}</div>
          </div>
        );
      })}
      <ul className="Synonyms">
        {meaning.synonyms.map(function (synonym, i) {
          return (
            <li className="btn btn-outline-secondary m-1" key={i}>
              {synonym}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
