import React from "react";
import { PokemonSchema } from "../types/PokemonSchema";
import "./PokeSearchResult.css";
import { PokemonClient } from "pokenode-ts";

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}

(async () => {
  const api = new PokemonClient();

  await api
    .getPokemonByName(`ditto`)
    .then((pokemoves: any) => console.log())
    .catch((error: any) => console.error(error));
})();

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className="Poke-result-card">
      {selectedPokemon ? (
        <div style={{color: 'black'}}>
          <p>Num: {id}</p>
          <img
            className="pokemon-animated-sprite"
            src={sprites?.animated || sprites?.normal}
            alt="pokemon"
          />
          <p>Name: {name }</p>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <p>Base Exp: {base_experience}</p>
        </div>
      ) : (
        <h2 style={{color: 'black'}}>Welcome to the Pokedex</h2>
      )}
    </div>
  );
};

export default PokeSearchResult;
