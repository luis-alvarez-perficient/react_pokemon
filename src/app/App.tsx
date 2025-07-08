import { ThemeContext, themes } from "../shared/context/ThemeContext";
import PokemonListContainer from "../features/pokemons/pokemon-list/PokemonListContainer";
import MainLayout from "../shared/ui/layout/main-layout/MainLayout";
import Header from "../shared/ui/layout/header/Header";
import Sidenav from "../shared/ui/layout/sidenav/Sidenav";
import "./App.css";

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <MainLayout
        header={<Header />}
        sidenav={<Sidenav />}
        body={<PokemonListContainer />}
      />
    </ThemeContext.Provider>
  );
}

export default App;
