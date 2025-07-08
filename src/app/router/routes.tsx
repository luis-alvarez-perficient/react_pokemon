import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../shared/ui/layout/main-layout/MainLayout";
import Header from "../../shared/ui/layout/header/Header";
// import Sidenav from "../../shared/ui/layout/sidenav/Sidenav";

const PokemonListContainer = lazy(
  () => import("../../features/pokemons/pokemon-list/PokemonListContainer")
);

const PokemonDetail = lazy(
  () => import("../../features/pokemons/pages/PokemonDetail")
);

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            header={<Header />}
            // sidenav={<Sidenav />}
            asideLeft={<div>Aside Left</div>}
            body={
              <PokemonListContainer />
              // <Suspense fallback={<div>Cargando...</div>}>
              //   <PokemonListContainer />
              // </Suspense>
            }
            asideRight={<div>Aside Right</div>}
          />
        }
      />
      <Route
        path="/pokemon-detail"
        element={
          <MainLayout
            header={<Header />}
            // sidenav={<Sidenav />}
            body={
              <Suspense fallback={<div>Cargando...</div>}>
                <PokemonDetail />
              </Suspense>
            }
          />
        }
      />
      <Route
        path="*"
        element={
          <MainLayout
            header={<Header />}
            // sidenav={<Sidenav />}
            // body={
            //   // <Suspense fallback={<div>Cargando...</div>}>
            //     {/* <NotFound /> */}
            //   </Suspense>
            // }
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
