export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3 className="text-capitalize">{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, i) {
        return (
          <div key={i}>
            <div>{definition.definition}</div>

            <div className="text-muted">{definition.example}</div>

            <ul className="Synonyms">
              {definition.synonyms.map(function (synonym, i) {
                return <li key={i}>{synonym}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
