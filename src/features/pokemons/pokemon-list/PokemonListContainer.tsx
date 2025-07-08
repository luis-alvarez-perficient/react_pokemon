import { UseFetch } from "../../../shared/hooks/hooks";
import { Pokemon, PokemonResponse } from "../../../shared/types/types";
import { EmptyCard, ErrorCard, LoaderSpinner } from "../../../shared/ui/ui";
import { lazy } from "react";

const PokemonList = lazy(() => import("./PokemonList"));

function PokemonListContainer() {
  const { data, loading, error } = UseFetch<PokemonResponse>({
    url: "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0",
  });

  const pokemons = data?.results?.map((pokemon) => {
    const id = pokemon.url.split("/").slice(-2)[0];
    return {
      id,
      name: pokemon.name,
    } as Pokemon;
  });

  return (
    <>
      {error && <ErrorCard message={error.message} />}
      {loading && <LoaderSpinner />}
      {data && data.results.length === 0 && <EmptyCard />}
      {data && <PokemonList pokemons={pokemons} />}
    </>
  );
}

export default PokemonListContainer;
