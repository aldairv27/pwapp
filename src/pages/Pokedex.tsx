/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import PokedexMain from '../components/pokedex/PokedexMain/PokedexMain'
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../components/pokedex/types/PokemonSchema';
import { pokemonData } from "../components/pokedex/data/PokemonData";
import { Col, Row } from 'antd';

export const Pokedex = () => {
    const [searchField,setSearchField] = useState<string>("");
    const [allpokemons,setallpokemons] = useState<PokemonSchema[]>([]);
    const [searchedPokemons,setsearchedPokemons] = useState<PokemonSchema[]>([]);
    const [selectedPokemon,setselectedPokemon] = useState<PokemonSchema | undefined>(undefined);

    useEffect(() => {
        //Patched the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = patchPokemonData(pokemonData);
        setallpokemons(patchedPokemons)
        setsearchedPokemons(patchedPokemons);
    },[])

    const patchPokemonData = (pokemons: UnpatchedPokemonSchema[]): PokemonSchema[] => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };
            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing the sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    };

    

    const handleInputChange = (inputValue: string) => {
        // filter the searched pokemons
        // const { allpokemons } = this.state;

        const searchedPokemons = allpokemons.filter((pokemon: PokemonSchema) => {
            return (
                pokemon.name &&
                pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
            );
        });

        // this.setState({
        //     searchField: inputValue,
        //     searchedPokemons: searchedPokemons,
        // });
        setSearchField(inputValue);
        setsearchedPokemons(searchedPokemons);
    };

    const handleClick = (pokemonName: String) => {

        //Find the selected pokemon from allpokemons
        const selectedPokemon = allpokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        );

        //Update the state
        setselectedPokemon( selectedPokemon );
    };
    return (
        <>
        <Row style={{width: '100%'}}>
          <Col span={24} style={{width: '100%', height: '10vh', placeContent: 'center', display: 'flex',}}>
            <h1> Pokedex! </h1>
          </Col>
          <Col span={24} style={{width: '100%', height: '90vh', placeContent: 'center', display: 'flex',}}>
            <PokedexMain
                searchedPokemons={searchedPokemons}
                selectedPokemon={selectedPokemon}
                onInputChange={handleInputChange}
                onPokemonClick={handleClick}
            />
          </Col>
        </Row>
        </>
    )
}