export default function Phonetic({ phonetic }) {
  return (
    <div className="Phonetic mt-3 d-sm-flex">
      <div>
        <audio controls key={phonetic.audio}>
          <source src={phonetic.audio} type="audio/mp3" />
        </audio>
      </div>

      <div className="m-3">{phonetic.text}</div>
    </div>
  );
}
