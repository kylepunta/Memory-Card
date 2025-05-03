import Card from "./Card";

export default function Cards({ pokemonList }) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} src={pokemon.src} name={pokemon.name} />
      ))}
    </>
  );
}
