import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../../shared/ui/layout/main-layout/MainLayout";
import Header from "../../shared/ui/layout/header/Header";
import { NotFoundPage } from "../../features/not-found/pages/NotFoundPage";

const PokemonListContainer = lazy(
  () =>
    import(
      "../../features/pokemons/pokemon-list/components/PokemonListContainer"
    )
);

const PokemonDetailScreen = lazy(
  () => import("../../features/pokemons/pokemon-detail/pages/PokemonDetailPage")
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace />} />
      <Route
        path="/pokemons"
        element={
          <MainLayout
            header={<Header />}
            // sidenav={<Sidenav />}
            asideLeft={<div>Aside Left</div>}
            body={<PokemonListContainer />}
            asideRight={<div>Aside Right</div>}
          />
        }
      />
      <Route
        path="/pokemons/:id"
        element={
          <MainLayout
            header={<Header />}
            // sidenav={<Sidenav />}
            body={
              <Suspense fallback={<div>Cargando...</div>}>
                <PokemonDetailScreen />
              </Suspense>
            }
          />
        }
      />

      <Route
        path="*"
        element={<MainLayout header={<Header />} body={<NotFoundPage />} />}
      />
    </Routes>
  );
};

export default AppRouter;
