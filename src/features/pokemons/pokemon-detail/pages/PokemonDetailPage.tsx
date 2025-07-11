import { useParams } from "react-router-dom";
import PokemonCardDetailContainer from "../components/PokemonCardDetailContainer";

function PokemonDetailPage() {
  const { id } = useParams();
  const idPokemon: number = Number(id ?? 0);

  return (
    <>
      <PokemonCardDetailContainer id={idPokemon} />
    </>
  );
}

export default PokemonDetailPage;
