import { Pokemon } from "../../../../shared/types/types";

type PokemonCardProps = {
  pokemon: Pokemon;
};

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="pokemon-card">
      <h3 className="pokemon-title">{pokemon.name}</h3>
      <img
        className="pokemon-image"
        src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
        alt={`Esta es la imagen del pokemon ${pokemon.name}`}
        title={pokemon.name}
      />
      <div />
    </div>
  );
}

export default PokemonCard;
