import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import POKEMONS from '../models/mock-pokemon';
import Pokemon from '../models/pokemon';

const PokemonList = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemon(POKEMONS)
  }, [])

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonList
