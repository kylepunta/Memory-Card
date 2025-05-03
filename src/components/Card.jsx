export default function Card({ key, src, name }) {
  return (
    <>
      <div className="card" key={key}>
        <div className="card-image">
          <img src={src} alt={name} />
        </div>
        <div className="card-name">
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
}
