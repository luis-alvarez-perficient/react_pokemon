import { SimplePokemon } from "./SimplePokemon";

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: SimplePokemon[];
}
