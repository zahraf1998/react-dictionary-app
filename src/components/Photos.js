import "./Photos.css";

export default function Photos({ photos }) {
  return (
    <div className="Photos">
      <section>
        <div className="row">
          {photos.slice(0, 3).map(function (photo, i) {
            return (
              <div className="col-sm-4 mb-3 mb-sm-0" key={i}>
                <a href={photo.links.html} target="_blank" rel="noreferrer">
                  <img
                    src={photo.urls.regular}
                    className="img-fluid shadow rounded"
                    alt={photo.alt_description}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
