type Props = {
  pokemonId?: string;
  pokemonName?: string;
};

function PokemonDetail({ pokemonId, pokemonName }: Props) {
  return (
    <div>
      <h1>Pokemon Detail</h1>
      {pokemonId && <p>ID: {pokemonId}</p>}
      {pokemonName && <p>Name: {pokemonName}</p>}
    </div>
  );
}

export default PokemonDetail;
