import { lazy, Suspense } from "react";
import { LoaderSpinner } from "../../../../shared/ui/ui";
import UseFetchSuspense from "../../../../shared/hooks/UseFetchSuspense";
import { PokemonResponse } from "../../../../shared/types/pokemons/PokemonsResponse";

const PokemonList = lazy(() => import("./PokemonList"));

const apiData = UseFetchSuspense<PokemonResponse>({
  url: "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
});

function PokemonListContainerSuspense() {
  const data = apiData.read(); // This will throw if the data is not ready yet

  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        {data && <PokemonList pokemons={data.results} />}
      </Suspense>
      {/* {error && <ErrorCard message={error.message} />}
      {loading && <LoaderSpinner />}
      {data && data.results.length === 0 && <EmptyCard />}
      {data && <PokemonList pokemons={data?.results} />} */}
    </>
  );
}

export default PokemonListContainerSuspense;
