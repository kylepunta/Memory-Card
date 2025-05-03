export default function Card({
  id,
  src,
  name,
  clickedCards,
  setClickedCards,
  setCurrentScore,
  setBestScore,
  currentScore,
  bestScore,
}) {
  return (
    <>
      <div
        className="card"
        id={id}
        onClick={() => {
          const clickedCardsSet = new Set(clickedCards);
          if (clickedCardsSet.has(id)) {
            if (currentScore > bestScore) {
              setBestScore(currentScore);
            }
            setCurrentScore(0);
            setClickedCards([]);
          } else {
            if (currentScore < 9) {
              setCurrentScore((prev) => prev + 1);
              setClickedCards((prev) => [...prev, id]);
            } else {
              setCurrentScore(0);
              setClickedCards([]);
            }
          }
        }}
      >
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
