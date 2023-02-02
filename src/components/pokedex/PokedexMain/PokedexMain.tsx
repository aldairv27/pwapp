import { Col, Row } from "antd/es/grid";
import React from "react";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import { PokemonSchema } from "../types/PokemonSchema";
import "./PokedexMain.css";

interface PokedexProps{
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const PokedexMain = ({searchedPokemons, selectedPokemon, onInputChange, onPokemonClick}: PokedexProps) => {
        return (
        <>
            <Row className="Pokedex-container" justify="space-around">
                <Col className ="pokelist-container" span={18} style={{textAlignLast: 'center'}}>
                    <SearchBox onInputChange={onInputChange}/>
                     <Pokelist
                      onPokemonClick = {onPokemonClick} 
                      searchedPokemons = {searchedPokemons} 
                      />
                </Col>
                <Col className ="pokesearchresult-container" span={6}>
                    <PokeSearchResult selectedPokemon = {selectedPokemon} />
                </Col>
            </Row>
        </>
    )
}

export default PokedexMain;