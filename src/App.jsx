import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setPokemonList((prev) => {
      const pokemonList = [...prev];
      for (let i = pokemonList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pokemonList[i], pokemonList[j]] = [pokemonList[j], pokemonList[i]];
      }
      return pokemonList;
    });
  }, [clickedCards]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonNames = [
        "pikachu",
        "squirtle",
        "charmander",
        "bulbasaur",
        "pidgey",
        "eevee",
        "magikarp",
        "snorlax",
        "jigglypuff",
        "mew",
      ];
      try {
        const responses = await Promise.all(
          pokemonNames.map(async (name) => {
            try {
              const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
              );
              if (!response) {
                console.warn(`Failed to fetch ${name}`, response.status);
                return null;
              }
              const data = await response.json();
              console.log(`${name} fetched: `, data);
              return data;
            } catch (error) {
              console.error(`Error fetching ${name}`, console.error);
              return null;
            }
          })
        );
        console.log(responses);
        const responsesFormatted = responses.map((pokemon) => ({
          id: pokemon.id,
          src: pokemon.sprites.front_default,
          name: pokemon.name,
        }));
        setPokemonList(responsesFormatted);
      } catch (error) {
        console.error("Failed to fetch PokeAPI", error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>Pokemon Card Memory Game</h1>
        </div>
        <div>
          <div>
            <h3 id="score-heading">Score: </h3>
            <p id="score">{currentScore}</p>
          </div>
          <div>
            <h3 id="best-score-heading">Best Score: </h3>
            <p id="best-score">{bestScore}</p>
          </div>
        </div>
      </header>
      <main>
        <Cards
          pokemonList={pokemonList}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          setCurrentScore={setCurrentScore}
          setBestScore={setBestScore}
          currentScore={currentScore}
          bestScore={bestScore}
        />
      </main>
    </>
  );
}

export default App;
