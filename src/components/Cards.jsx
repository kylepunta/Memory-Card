import Card from "./Card";

export default function Cards({
  pokemonList,
  clickedCards,
  setClickedCards,
  setCurrentScore,
  setBestScore,
  currentScore,
  bestScore,
}) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          src={pokemon.src}
          name={pokemon.name}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          setCurrentScore={setCurrentScore}
          setBestScore={setBestScore}
          currentScore={currentScore}
          bestScore={bestScore}
        />
      ))}
    </>
  );
}
