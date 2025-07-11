import { lazy } from "react";
import UseFetch from "../../../../shared/hooks/UseFetch";
import { ErrorCard, LoaderSpinner, EmptyCard } from "../../../../shared/ui/ui";
import { PokemonResponse, SimplePokemon } from "../../../../shared/types/types";

const PokemonList = lazy(() => import("./PokemonList"));

function PokemonListContainer() {
  const { data, loading, error } = UseFetch<PokemonResponse>({
    url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
  });

  const pokemons = data?.results?.map((pokemon) => {
    const id = pokemon.url.split("/").slice(-2)[0];

    return {
      id,
      name: pokemon.name,
    } as SimplePokemon;
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
