import { useEffect, useState } from "react";
import { Pokemon } from "../../../../shared/types/types";
import PokemonCardDetail from "./PokemonCardDetail";

type Props = {
  id: number;
};

const PokemonCardDetailContainer = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon: Pokemon = await res.json();
      setPokemon(pokemon);
      setLoading(false);
    };
    fetchPokemon();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return <>{pokemon && <PokemonCardDetail pokemon={pokemon} />}</>;
};

export default PokemonCardDetailContainer;
