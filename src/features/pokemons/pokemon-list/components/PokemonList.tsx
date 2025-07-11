import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../shared/context/ThemeContext";
import { SimplePokemon } from "../../../../shared/types/types";
import "./PokemonList.css";

type Props = {
  pokemons?: SimplePokemon[];
};

function PokemonList({ pokemons }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="container-pokemon-list"
      style={{ background: theme.background, color: theme.color }}
    >
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;

type PokemonCardProps = {
  pokemon: SimplePokemon;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const navigate = useNavigate();
  return (
    <div className="pokemon-card">
      <h3 className="pokemon-title">{pokemon.name}</h3>
      <img
        className="pokemon-image"
        // src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        alt={`Esta es la imagen del pokemon ${pokemon.name}`}
        title={pokemon.name}
      />

      <button
        className="pokemon-button-detail"
        onClick={() => {
          navigate(`/pokemons/${pokemon.id}`);
        }}
      >
        <span>Ver Detalles</span>
      </button>
    </div>
  );
}
