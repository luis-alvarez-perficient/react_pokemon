import { Pokemon } from "../../../../shared/types/pokemons/Pokemon";
import "./PokemonCardDetail.css";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCardDetail({ pokemon }: Props) {
  return (
    <article className="pokemon-card-detail">
      <h1 className="pokemon-title">
        #{pokemon.id} {pokemon.name}
      </h1>
      <img
        className="pokemon-image"
        // src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
        src={pokemon.sprites.other?.dream_world.front_default ?? ""}
        alt={`Imagen del pokemon ${pokemon.name}`}
        title={pokemon.name}
        width={150}
        height={150}
      />
      <div className="pokemon-details">
        <h2 className="pokemon-subtitle">Moves</h2>
        <div className="pokemon-moves-list">
          {pokemon.moves.map((move) => (
            <span className="move-item" key={move.move.name}>
              {move.move.name}
            </span>
          ))}
        </div>

        <div className="pokemon-types">
          <h2 className="pokemon-subtitle">Types</h2>
          <div className="pokemon-types-list">
            {pokemon.types.map((type) => (
              <span className="type-item" key={type.slot}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="pokemon-weight">
          <h2 className="pokemon-subtitle">Peso</h2>
          <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            {pokemon.weight}
          </p>
        </div>
        <div className="pokemon-sprites">
          <h2 className="pokemon-subtitle">Regular Sprites</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={`sprite ${pokemon.name}`}
            width={150}
            height={150}
          />
          <img
            src={pokemon.sprites.back_default}
            alt={`sprite ${pokemon.name}`}
            width={150}
            height={150}
          />
        </div>
      </div>
    </article>
  );
}
