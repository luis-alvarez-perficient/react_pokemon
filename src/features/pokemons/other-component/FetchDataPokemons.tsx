import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../../shared/context/ThemeContext";
import "./FetchDataPokemons.css";

interface PokemonResponse {
  count: number;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

function FetchDataPokemons() {
  // const [data, setData] = useState<{ id: number; name: string; email: string; phone: string; website: string }[] | null>(null);
  const [pokemonResponse, setData] = useState<PokemonResponse>();

  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0.")
      .then((response) => response.json())
      .then((pokemonResponse) => setData(pokemonResponse))
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      console.log("Cleanup if needed");
    };
  }, []);

  console.log("Data fetched:", pokemonResponse);

  return (
    <div
      className="container-pokemon-list"
      style={{ background: theme.background, color: theme.color }}
    >
      {pokemonResponse?.results?.map((pokemon) => (
        <div className="pokemon-card">
          <div key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <img
              className="pokemon-image"
              src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
              alt=""
            />
          </div>
          <div />
        </div>
      ))}
    </div>
  );
}

export default FetchDataPokemons;
