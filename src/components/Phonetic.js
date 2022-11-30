export default function Phonetic({ phonetic }) {
  return (
    <div className="Phonetic mt-3">
      <a
        href={phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="btn btn-secondary me-4"
      >
        Listen
      </a>

      <span className="text">{phonetic.text}</span>
    </div>
  );
}
